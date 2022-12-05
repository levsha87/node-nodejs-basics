import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const stream = createReadStream(path.resolve(__dirname, 'files','fileToRead.txt'), { encoding: 'utf8' })
    stream.on('data', (chunk) => {
        stdout.write(chunk);
    })
    
    stream.on('error', (err) => console.log(err))
};

await read();