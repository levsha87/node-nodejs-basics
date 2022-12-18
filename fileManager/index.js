import { greetingUser, sayGoodbye } from "./greeting.js";
import { handleInputData } from "./handleInputData.js";
import { initStartDirectory } from "./navigationWorkingDirectory.js";

const launchApp = () => {
    const userName = greetingUser(process.argv);
    initStartDirectory();
    process.stdin.setEncoding("utf-8");
    process.stdin.on('data', handleInputData);
    process.on('uncaughtException', handleError);
    process.on('SIGINT', () => sayGoodbye(userName));
}

function handleError(err) {
    console.log("whole error-----", err);
    if(err.message.includes("input")) {
        console.log(err.message); 
    } else {
        console.log("Operation failed");
    }
      
}

launchApp();