import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, 'files', 'wrongFilename.txt');
  const newFilePath = path.join(__dirname, 'files', 'properFilename.md');

  try {
    await fs.rename(filePath, newFilePath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename();