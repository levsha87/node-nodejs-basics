import { readdir } from 'node:fs/promises';

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

await list("src/fs/files");