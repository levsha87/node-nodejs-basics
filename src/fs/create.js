import { existsSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';

const create = async () => { 
    try {
        if(existsSync('src/fs/files/fresh.txt')) {
            throw "FS operation failed"
        } else {
            await writeFile('src/fs/files/fresh.txt', 'I am fresh and young')
        }
    } catch (error) {
        console.log(error);
    }
};

await create();