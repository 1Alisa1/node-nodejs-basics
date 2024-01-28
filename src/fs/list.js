import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const folderPath = path.join(__dirname, 'files');

  try {
    const files = await fs.readdir(folderPath);
    console.log(files);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();