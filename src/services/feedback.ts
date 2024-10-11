const args = process.argv;
const usernameArg = args[2];

export const username = usernameArg.split('=')[1];

export const greet = () => {
  console.log(`Welcome to the File Manager, ${username}!`);
};

export const bye = () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
}

export const operationFailed = (err?: unknown) => {
  if (err) {
    console.log(err);
  }

  console.log('Operation failed');
}

export const unknownCommand = (command: string) => {
  console.log(`Error: unknown command "${command}"`);
};
