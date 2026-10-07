// Renders scripts/og-image.html to public/og-image.jpg (1200×630).
// Needs a Chromium browser: set BROWSER to its path, or it tries Edge/Chrome defaults.
//   node scripts/og-image.mjs
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import sharp from 'sharp';

const root = resolve(import.meta.dirname, '..');
const candidates = [
  process.env.BROWSER,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);
const browser = candidates.find((path) => existsSync(path));
if (!browser) throw new Error('No Chromium browser found — set BROWSER to its path.');

const work = mkdtempSync(join(tmpdir(), 'og-'));
const png = join(work, 'og.png');
try {
  execFileSync(browser, [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--allow-file-access-from-files',
    '--virtual-time-budget=3000',
    '--window-size=1200,630',
    `--screenshot=${png}`,
    pathToFileURL(join(root, 'scripts/og-image.html')).href,
  ], { stdio: 'ignore' });

  const out = join(root, 'public/og-image.jpg');
  const info = await sharp(png).resize(1200, 630).jpeg({ quality: 86, mozjpeg: true }).toFile(out);
  console.log(`public/og-image.jpg — ${info.width}×${info.height}, ${Math.round(info.size / 1024)} KB`);
} finally {
  rmSync(work, { recursive: true, force: true });
}
