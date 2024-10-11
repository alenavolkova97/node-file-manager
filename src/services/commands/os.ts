import os from 'os';
import { unknownCommand } from '../feedback';

export const osCommand = (input: string) => {
    const type = input.split(' ')[1];

    switch (type) {
        case '--EOL': {
            console.log(os.EOL);

            break;
        }

        case '--cpus': {
            console.log(JSON.stringify(os.cpus(), null, '  '));

            break;
        }

        case '--homedir': {
            console.log(os.homedir());

            break;
        }

        case '--username': {
            console.log(os.userInfo().username);

            break;
        }

        case '--architecture': {
            console.log(os.arch());

            break;
        }

        default: {
            unknownCommand(input);
        }
    }
}
