import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { stdin, stdout } from 'process';

const write = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

    const stream = fs.createWriteStream(filePath);

    stdout.write('Hello\n');

    stdin.on('data', (data) => {
        stream.write(data);
    });
};

await write();