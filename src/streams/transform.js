import { stdin, stdout } from 'node:process';
import { Transform } from 'node:stream';

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.reverse().toString() + "\n");
            callback();
        }
    });

    stdin.pipe(transformStream).pipe(stdout);
};

await transform();