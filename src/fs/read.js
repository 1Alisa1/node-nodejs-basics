import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

  try {
    const fileText = await fs.readFile(filePath, 'utf-8');
    console.log(fileText);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();