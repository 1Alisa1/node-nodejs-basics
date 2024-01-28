import { createHash, createHmac } from 'node:crypto';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'fs';

const calculateHash = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

  const stream = createReadStream(filePath);

  stream.on('data', (chunk) => {
    const hash = createHash('sha256').update(chunk).digest('hex');

    console.log(hash);
  });
};

await calculateHash();