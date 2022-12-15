import { rename as renameFile } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
    try {
        await renameFile(path.resolve(__dirname, "files", "wrongFilename.txt"), path.resolve(__dirname, "files", "properFilename.md"))
    } catch (error) {
        if(error.code === "EEXIST" || error.code === "ENOENT") {
            console.error("FS operation failed");
        } else {
            console.error(error);
        }
    }
};

await rename();