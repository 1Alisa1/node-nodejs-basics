import { createReadStream, createWriteStream } from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream';

const decompress = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
  const gzFilePath = path.join(__dirname, 'files', 'archive.gz');

  const gzip = createGunzip();
  const readStream = createReadStream(gzFilePath);
  const writeStream = createWriteStream(filePath);

  pipeline(readStream, gzip, writeStream, (err) => console.log(err));
};

await decompress();