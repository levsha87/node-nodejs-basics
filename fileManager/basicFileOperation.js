import { createReadStream, createWriteStream } from 'node:fs';
import { open, rename } from 'node:fs/promises';
import path from 'path';

const readFileToConsole = (inputPath) => {
    return new Promise((resolve) => {
        const pathToFile = path.resolve(inputPath);

        const readStream = createReadStream(pathToFile, { encoding: 'utf8' });
        readStream.on('data', (chunk) => {
            resolve(console.log(chunk));
        });
    });

}

const createEmptyFile = async (fileName) => {
    const pathToFile = path.resolve(fileName);
    await open(pathToFile, 'wx')
    .then((result) => {
        result.close();
        console.log("file created");
    });
    
}

const renameFile = async (data) => {
    const [pathToFile, fileName] = data.split(" ");

    await rename(path.resolve(pathToFile), path.resolve(fileName));
}

const copyFile = (data) => {
    console.log("not realize");
    // return new Promise (resolve => {
    //     const [pathToFile, pathToFolder] = data.split(" ");
    //     const [fileName] = pathToFile.split(path.sep);
    //     console.log(fileName, pathToFile, pathToFolder);
    //     const readStream = createReadStream(path.resolve(pathToFile), { encoding: 'utf8' });
    //     const writableStream = createWriteStream(path.join(path.resolve(pathToFolder), fileName), { encoding: 'utf8' });
    // })
}

export { readFileToConsole, createEmptyFile, renameFile, copyFile };