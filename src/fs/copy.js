import { readdir } from 'node:fs/promises';
import { mkdir } from 'node:fs/promises';
import { copyFile, constants } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async (folder) => {
    try {
        await mkdir(path.resolve(__dirname,`${folder}_copy`))
        const files = await readdir(path.resolve(__dirname, folder));
        for (const file of files) {
          await copyFile(path.resolve(__dirname, folder, file), path.resolve(__dirname, `${folder}_copy`, file), constants.COPYFILE_EXCL);
        }  
      } catch (err) {
        if(err.code === "EEXIST" || err.code === "ENOENT") {
            console.error("FS operation failed");
        } else {
            console.error(err);
        }
      }
};

copy("files");