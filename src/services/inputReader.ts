import readline from 'readline/promises';
import { cwd } from './cwd';

export const waitForUserInput = async () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false,
    });

    const answer = await rl.question(`${cwd.get()}\n> `);

    rl.close();

    return answer;
};
