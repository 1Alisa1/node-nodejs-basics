import { createReadStream, createWriteStream } from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';

const compress = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
  const gzFilePath = path.join(__dirname, 'files', 'archive.gz');

  const gzip = createGzip();
  const readStream = createReadStream(filePath, 'utf-8');
  const writeStream = createWriteStream(gzFilePath);

  pipeline(readStream, gzip, writeStream, (err) => console.log(err));
};

await compress();