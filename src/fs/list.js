import { readdir } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async (path) => {
    try {
        const files = await readdir(path);
        console.log("The 'files' folder contains the following files", files); 
      } catch (err) {
        if(err.code === "ENOENT") {
            console.error("FS operation failed");
        } else {
            console.error(err);
        }
      }
};

await list(path.resolve(__dirname, "files"));