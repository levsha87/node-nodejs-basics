import { readFile } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    try {
        const contents = await readFile(path.resolve(__dirname, "files", "fileToRead.txt"), { encoding: 'utf8' });
        console.log(contents);
      } catch (err) {
        if(err.code === "ENOENT") {
            console.error("FS operation failed");
        } else {
            console.error(err);
        }
      }
};

await read();