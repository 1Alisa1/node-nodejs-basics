import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const folderPath = path.join(__dirname, 'files');
  const copyFolderPath = path.join(__dirname, 'files_copy');

    await fs.mkdir(copyFolderPath).catch(() => {
      throw new Error('FS operation failed');
    });

    const files = await fs.readdir(folderPath);

    for (const file of files) {
      const filePath = path.resolve(folderPath, file);
      const copyFilePath = path.resolve(copyFolderPath, file);

      fs.copyFile(filePath, copyFilePath, fs.constants.COPYFILE_EXCL);
    }
};

await copy();
