const args = process.argv;
const usernameArg = args[2];
    
export const username = usernameArg.split('=')[1];

export const greet = () => {
    console.log(`Welcome to the File Manager, ${username}!`);
};

export const bye = () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
}

export const operationFailed = () => {
    console.log('Operation failed');
}
