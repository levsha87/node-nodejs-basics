const parseArgs = () => {
    const regExp = /^[--]/;
    const argsArray = process.argv;
    const finishArr = [];
    for (const arg of argsArray) {
        if(arg.match(regExp)) {
            const argIndex = argsArray.indexOf(arg);
            finishArr.push(`${arg} is ${argsArray[argIndex+1]}`);
        }
        continue;
    }
    console.log(finishArr.join(","));
};

parseArgs();