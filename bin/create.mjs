#!/usr/bin/env node

import { downloadTemplate } from 'giget';
import { resolve, basename } from 'node:path';
import { readFileSync, writeFileSync } from 'node:fs';

const TEMPLATE = 'gh:CleanSlice/nest-nuxt-starter-kit';

const target = process.argv[2];

if (!target) {
  console.log('\nUsage: npx create-cleanslice <project-name>\n');
  console.log('Example: npx create-cleanslice my-app\n');
  process.exit(1);
}

const dir = resolve(process.cwd(), target);
const name = basename(dir);

console.log(`\nScaffolding ${name}...\n`);

try {
  await downloadTemplate(TEMPLATE, { dir, force: false });

  // Update API package.json name
  updatePackageName(resolve(dir, 'api/package.json'), `${name}-api`);

  // Update App package.json name
  updatePackageName(resolve(dir, 'app/package.json'), `${name}-app`);

  console.log(`Done! Next steps:\n`);
  console.log(`  cd ${target}`);
  console.log(`  cd api && cp .env.example .env.dev && bun install && bun run dev`);
  console.log(`  cd app && bun install && bun run dev\n`);
} catch (err) {
  if (err.message?.includes('already exists')) {
    console.error(`Error: Directory "${target}" already exists.\n`);
  } else {
    console.error('Error:', err.message || err);
  }
  process.exit(1);
}

function updatePackageName(path, newName) {
  try {
    const pkg = JSON.parse(readFileSync(path, 'utf-8'));
    pkg.name = newName;
    writeFileSync(path, JSON.stringify(pkg, null, 2) + '\n');
  } catch {
    // File may not exist in template — skip silently
  }
}
