const greetingUser = (processArgv) => {
    let username = '';
    const argsArray = processArgv.slice(2);
    
    for (const arg of argsArray) {
        if (arg.includes('username')) {
            const i = arg.indexOf('=');
            username = arg.slice(i + 1);
            const greetingPhrase = `Welcome to the File Manager, ${username}!`
            console.log(greetingPhrase);
        }   
    }

    return username;
};

function sayGoodbye(name) {
    console.log(`Thank you for using File Manager, ${name}, goodbye!`)
    process.exit();
}

export { greetingUser, sayGoodbye };