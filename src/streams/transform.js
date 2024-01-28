import { stdin, stdout } from 'process';
import { Transform } from 'stream';

const transform = async () => {
    const reverse = new Transform({
        transform: (chunk, encoding, callback) => {
            callback(null, chunk.reverse());
        }
    });

    stdout.write('Hello\n');

    stdin.pipe(reverse).pipe(stdout);
};

await transform();