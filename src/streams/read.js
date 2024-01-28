import { createReadStream } from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { stdout } from 'process';

const read = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

    createReadStream(filePath).pipe(stdout);
};

await read();