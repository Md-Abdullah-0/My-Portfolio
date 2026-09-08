import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const root = path.dirname(__filename);

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function copyIfExists(src, dest) {
  if (fs.existsSync(src)) {
    ensureDir(path.dirname(dest));
    fs.copyFileSync(src, dest);
  }
}

// Check if src/main.tsx is missing but root main.tsx exists (i.e. files were pushed to repo root)
const hasSrcMain = fs.existsSync(path.join(root, 'src', 'main.tsx'));
const hasRootMain = fs.existsSync(path.join(root, 'main.tsx'));

if (!hasSrcMain && hasRootMain) {
  console.log('[prepare-build] Flat repository structure detected. Reorganizing files into src/ structure for Vite...');

  const components = [
    'Taskbar.tsx',
    'Desktop.tsx',
    'TopBar.tsx',
    'StayFresh.tsx',
    'ContextMenu.tsx',
    'Window.tsx',
    'DesktopIcon.tsx',
    'MonitorFrame.tsx'
  ];

  const srcFiles = [
    'App.tsx',
    'main.tsx',
    'data.tsx',
    'index.css',
    'types.ts',
    'vite-env.d.ts'
  ];

  const utils = ['audio.ts'];

  // Copy component files to src/components/
  for (const file of components) {
    copyIfExists(path.join(root, file), path.join(root, 'src', 'components', file));
  }

  // Copy utils to src/utils/
  for (const file of utils) {
    copyIfExists(path.join(root, file), path.join(root, 'src', 'utils', file));
  }

  // Copy image assets to src/assets/images/
  try {
    const rootFiles = fs.readdirSync(root);
    for (const file of rootFiles) {
      if (/\.(jpe?g|png|gif|svg|webp)$/i.test(file)) {
        copyIfExists(path.join(root, file), path.join(root, 'src', 'assets', 'images', file));
      }
    }
  } catch (err) {
    console.warn('[prepare-build] Warning scanning image assets:', err);
  }

  // Copy top-level src files to src/
  for (const file of srcFiles) {
    copyIfExists(path.join(root, file), path.join(root, 'src', file));
  }

  console.log('[prepare-build] Files reorganized successfully.');
} else {
  console.log('[prepare-build] src/ directory structure verified.');
}
