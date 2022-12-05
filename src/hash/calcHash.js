const { createHmac } = await import('node:crypto');
import { readFile } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
    const contents = await readFile(path.resolve(__dirname, "files", "fileToCalculateHashFor.txt"), { encoding: 'utf8' });
    const hash = createHmac('sha256', contents)
        .digest('hex');
    console.log(hash);
};

await calculateHash();