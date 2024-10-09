import { bye } from "./feedback";

export const processCommand = async (command: string) => {
    switch (command) {
        case '.exit': {
            bye();

            process.exit(0);
        }

        default: {
            console.log(`Error: unknown command "${command}"`);
        }
    }
}
