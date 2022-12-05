import { rm } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
    try {
        await rm(path.resolve(__dirname, "files", "fileToRemove.txt"))
    } catch (error) {
        if(error.code === "ENOENT") {
            console.error("FS operation failed");
        } else {
            console.error(error);
        }
    }
};

await remove();