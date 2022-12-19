import { readFileToConsole, createEmptyFile, renameFile, copyFile } from "./basicFileOperation.js";
import { showCurrentDirectory, moveUp, goToDedicatedfolder, showFolderContent } from "./navigationWorkingDirectory.js";

async function handleInputData(data) {
    data = data.trim();
    const params = data.split(" ");
   
    switch (params[0]) {
        case "cat":
            await readFileToConsole(data.slice(4));
            break;

        case "add":
            await createEmptyFile(data.slice(4))
            break;

        case "rn":
            await renameFile(data.slice(3))
            break;

        case "cp":
            await copyFile(data.slice(3))
            break;

        case "up":
            moveUp();
            break;

        case "cd":
            goToDedicatedfolder(params[1]);
            break;
        case "ls":
            await showFolderContent();
            break;
        default:
            throw new Error("Invalid input");
    }

    showCurrentDirectory();
}









export { handleInputData }