import { showCurrentDirectory, moveUp, goToDedicatedfolder, showFolderContent } from "./navigationWorkingDirectory.js";

async function handleInputData(data) {
    data = data.trim();
    const params = data.split(" ");
    console.log(params[0])
   
    switch (params[0]) {
        case "cat":
            console.log(params[0]);
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