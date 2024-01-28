import fs from 'fs/promises';
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, 'files', 'fresh.txt');

  try {
    await fs.writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
  } catch {
    throw new Error('FS operation failed');
  }
};

await create();