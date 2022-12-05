import { readdir } from 'node:fs/promises';
import { mkdir } from 'node:fs/promises';
import { copyFile, constants } from 'node:fs/promises';

const copy = async (path) => {
    try {
        await mkdir(`${path}_copy`)
        const files = await readdir(path);
        for (const file of files) {
          await copyFile(`${path}/${file}`, `${path}_copy/${file}`, constants.COPYFILE_EXCL);
        }  
      } catch (err) {
        if(err.code === "EEXIST" || err.code === "ENOENT") {
            console.error("FS operation failed");
        } else {
            console.error(err);
        }
      }
};

copy("src/fs/files");