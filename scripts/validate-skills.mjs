#!/usr/bin/env node
/**
 * Lightweight structural validation for SkillForge.
 * This is not a security audit and deliberately does not execute contributed scripts.
 */
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const ROOT = process.cwd();
const SKILLS_DIR = path.join(ROOT, "skills");
const NAME_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const problems = [];
let checked = 0;

function fail(file, message) {
  problems.push(`- ${path.relative(ROOT, file)}: ${message}`);
}

function parseFrontmatter(text, file) {
  if (!text.startsWith("---\n")) {
    fail(file, "SKILL.md must begin with YAML frontmatter delimited by ---");
    return null;
  }
  const end = text.indexOf("\n---", 4);
  if (end === -1) {
    fail(file, "frontmatter closing delimiter (---) is missing");
    return null;
  }
  const raw = text.slice(4, end);
  const field = (name) => {
    const line = raw.split(/\r?\n/).find((item) => new RegExp(`^\\s*${name}\\s*:`).test(item));
    if (!line) return "";
    const value = line.slice(line.indexOf(":") + 1).trim();
    return value.replace(/^["']|["']$/g, "");
  };
  return { name: field("name"), description: field("description") };
}

async function walkSkillFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const target = path.join(dir, entry.name);
    if (entry.isSymbolicLink()) {
      fail(target, "symbolic links are not allowed in the skill directory");
      continue;
    }
    if (entry.isDirectory()) files.push(...await walkSkillFiles(target));
    else if (entry.isFile()) files.push(target);
  }
  return files;
}

try {
  const dirStats = await stat(SKILLS_DIR);
  if (!dirStats.isDirectory()) throw new Error("skills/ exists but is not a directory");
} catch {
  console.error("Missing required skills/ directory.");
  process.exit(1);
}

const entries = await readdir(SKILLS_DIR, { withFileTypes: true });
for (const entry of entries) {
  if (!entry.isDirectory()) {
    fail(path.join(SKILLS_DIR, entry.name), "top-level entries under skills/ must be skill directories");
    continue;
  }
  const skillDir = path.join(SKILLS_DIR, entry.name);
  if (!NAME_RE.test(entry.name)) {
    fail(skillDir, "directory name must be lowercase alphanumeric words separated by single hyphens");
  }
  const skillFile = path.join(skillDir, "SKILL.md");
  let content;
  try {
    content = await readFile(skillFile, "utf8");
  } catch {
    fail(skillFile, "required SKILL.md is missing");
    continue;
  }
  checked++;
  const metadata = parseFrontmatter(content, skillFile);
  if (!metadata) continue;
  if (!metadata.name) fail(skillFile, "required frontmatter field 'name' is missing");
  else {
    if (metadata.name !== entry.name) fail(skillFile, `name '${metadata.name}' must match directory '${entry.name}'`);
    if (!NAME_RE.test(metadata.name)) fail(skillFile, "name must use lowercase alphanumeric words separated by single hyphens");
    if (metadata.name.length > 64) fail(skillFile, "name must be at most 64 characters");
  }
  if (!metadata.description) fail(skillFile, "required frontmatter field 'description' is missing");
  else if (metadata.description.length > 1024) fail(skillFile, "description must be at most 1024 characters");
  if (content.split(/\r?\n/).length > 500) {
    console.warn(`WARN ${path.relative(ROOT, skillFile)}: over 500 lines; consider splitting details into references/.`);
  }

  const allFiles = await walkSkillFiles(skillDir);
  const localLinks = [...content.matchAll(/\]\((?!https?:|mailto:|#)([^)]+)\)/g)].map((m) => m[1].split("#")[0]);
  for (const link of localLinks) {
    if (!link) continue;
    const resolved = path.resolve(path.dirname(skillFile), link);
    if (!resolved.startsWith(skillDir + path.sep) && resolved !== skillDir) {
      fail(skillFile, `local link escapes the skill folder: ${link}`);
      continue;
    }
    try {
      await stat(resolved);
    } catch {
      fail(skillFile, `local link target does not exist: ${link}`);
    }
  }
  for (const file of allFiles) {
    const lower = path.basename(file).toLowerCase();
    if ([".env", "id_rsa", "id_ed25519", "credentials.json"].includes(lower)) {
      fail(file, "possible secret/credential filename; remove it before contribution");
    }
  }
}

if (problems.length) {
  console.error(`SkillForge validation failed with ${problems.length} issue(s):\n${problems.join("\n")}`);
  process.exit(1);
}

console.log(`SkillForge validation passed: checked ${checked} skill(s). Structural checks only; this is not a security audit.`);
