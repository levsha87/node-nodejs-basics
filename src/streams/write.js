import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createWriteStream } from 'node:fs';
import { stdin, exit as processExit } from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    const writableStream = createWriteStream(path.resolve(__dirname, 'files','fileToWrite.txt'), { encoding: 'utf8' })
    stdin.on('data', data => {
        console.log(`You typed ${data.toString()} to fileToWrite.txt`);
        writableStream.write(data);
        processExit();
      });
    writableStream.on('error', (err) => console.log(err))
};

await write();