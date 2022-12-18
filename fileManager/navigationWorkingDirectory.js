import { homedir } from 'os';
import path from 'path';
import { readdir, stat } from 'fs/promises';

function getHomeDirectory() {
    return homedir();
}

const getCurrentDirectory = () => {
    return path.resolve();
}

const showCurrentDirectory = () => {
    console.log(`You are currently in ${getCurrentDirectory()}`)
}

const moveUp = () => {
    const currentDir = getCurrentDirectory();
    const rootDir = path.parse(currentDir).root;
    if(currentDir === rootDir) return;
    const newPathArray = currentDir.split(path.sep).slice(0, -1);
    const newPath = newPathArray.length === 1 ? rootDir : path.join(...newPathArray);
    process.chdir(newPath);
}

const goToDedicatedfolder = (targetDirectoryPath) => {
    console.log(targetDirectoryPath);
    const newPath = path.resolve(targetDirectoryPath);
    console.log(newPath);
    process.chdir(newPath);
}

const showFolderContent = async () => {
    const currentDir = getCurrentDirectory();
    const files = await readdir(currentDir);
    const table = [];
    for (const file of files){
        const stats = await stat(file);
        const type = await stats.isDirectory() ? "directory" : await stats.isFile() ? "file" : "unknown";
        table.push(new TableItem(file, type));
    }
    const sortTableByType = table.sort((a, b)=> {
        return a.Type < b.Type ? -1 : a.Type > b.Type ? 1 : 0;
    })

    console.table(sortTableByType);
}

const initStartDirectory = () => {
    process.chdir(getHomeDirectory());
    showCurrentDirectory();
}

function TableItem (file, type) {
    this.Name = file;
    this.Type = type;
}



export { getHomeDirectory, initStartDirectory, showCurrentDirectory, moveUp, goToDedicatedfolder, showFolderContent };