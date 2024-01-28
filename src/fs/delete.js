import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

  try {
    await fs.rm(filePath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();