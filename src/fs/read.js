import { readFile } from 'node:fs/promises';

const read = async () => {
    try {
        const contents = await readFile("src/fs/files/fileToRead.txt", { encoding: 'utf8' });
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