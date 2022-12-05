const { createHmac } = await import('node:crypto');
import { readFile } from 'node:fs/promises';

const calculateHash = async () => {
    const contents = await readFile("src/hash/files/fileToCalculateHashFor.txt", { encoding: 'utf8' });
    const hash = createHmac('sha256', contents)
        .digest('hex');
    console.log(hash);
};

await calculateHash();