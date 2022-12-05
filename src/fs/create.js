import { existsSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => { 
    try {
        if(existsSync(path.resolve(__dirname, "files", "fresh.txt"))) {
            throw "FS operation failed"
        } else {
            await writeFile(path.resolve(__dirname, "files", "fresh.txt"), 'I am fresh and young')
        }
    } catch (error) {
        console.log(error);
    }
};

await create();