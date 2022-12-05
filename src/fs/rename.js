import { rename as renameFile } from 'node:fs/promises';

const rename = async () => {
    try {
        await renameFile("src/fs/files/wrongFilename.txt", "src/fs/files/properFilename.md")
    } catch (error) {
        if(error.code === "EEXIST" || error.code === "ENOENT") {
            console.error("FS operation failed");
        } else {
            console.error(error);
        }
    }
};

await rename();