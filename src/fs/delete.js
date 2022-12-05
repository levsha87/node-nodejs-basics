import { rm } from 'node:fs/promises';

const remove = async () => {
    try {
        await rm("src/fs/files/fileToRemove.txt")
    } catch (error) {
        if(error.code === "ENOENT") {
            console.error("FS operation failed");
        } else {
            console.error(error);
        }
    }
};

await remove();