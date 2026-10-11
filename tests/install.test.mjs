import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { install } from '../scripts/install.mjs';

test('fresh installation copies the complete skill', async () => {
  const root = await mkdtemp(join(tmpdir(), 'meta-ads-install-'));
  const result = await install(root);
  assert.equal(result.count, 9);
  assert.deepEqual(await readFile(join(result.destination, 'SKILL.md')),
    await readFile(new URL('../meta-ads-agency-growth/SKILL.md', import.meta.url)));
  assert.match(await readFile(join(result.destination, 'references', 'offer-building.md'), 'utf8'), /\S/);
});

test('repeat installation updates bundled files and preserves unrelated files', async () => {
  const root = await mkdtemp(join(tmpdir(), 'meta-ads-update-'));
  const first = await install(root);
  await writeFile(join(first.destination, 'SKILL.md'), 'older version');
  await writeFile(join(first.destination, 'my-notes.txt'), 'keep my notes');
  await mkdir(join(root, 'other-skill'));
  await writeFile(join(root, 'other-skill', 'SKILL.md'), 'other skill');
  await install(root);
  assert.notEqual(await readFile(join(first.destination, 'SKILL.md'), 'utf8'), 'older version');
  assert.equal(await readFile(join(first.destination, 'my-notes.txt'), 'utf8'), 'keep my notes');
  assert.equal(await readFile(join(root, 'other-skill', 'SKILL.md'), 'utf8'), 'other skill');
});

test('invalid destination fails before overwriting a file', async () => {
  const root = await mkdtemp(join(tmpdir(), 'meta-ads-invalid-'));
  const destination = join(root, 'meta-ads-agency-growth');
  await writeFile(destination, 'keep this file');
  await assert.rejects(install(root), /Expected a directory/);
  assert.equal(await readFile(destination, 'utf8'), 'keep this file');
});

test('CLI installs only Codex without a PromptScript warning', async () => {
  const root = await mkdtemp(join(tmpdir(), 'meta-ads-cli-'));
  const script = fileURLToPath(new URL('../scripts/install.mjs', import.meta.url));
  const result = spawnSync(process.execPath, [script, '--dest', root], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /Installed meta-ads-agency-growth for Codex/);
  assert.doesNotMatch(result.stdout + result.stderr, /PromptScript|integration was skipped/i);
});
