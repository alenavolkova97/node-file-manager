import { cd } from "./commands/cd";
import { cwd } from "./cwd";
import { bye } from "./feedback";

export const processInput = async (input: string) => {
    const command = input.split(' ')[0];

    switch (command) {
        case 'up': {
            cwd.up();

            break;
        }

        case 'cd': {
            cd(input);

            break;
        }

        case '.exit': {
            bye();

            process.exit(0);
        }

        case '.failed': {
            throw new Error('unknown');
        }

        default: {
            console.log(`Error: unknown command "${command}"`);
        }
    }
}
