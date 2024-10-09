import { processCommand } from "./services/commandProcessor";
import { bye, greet } from "./services/feedback";
import { waitForCommands } from "./services/inputReader";

greet();

async function main() {
    while (true) {
        const command = await waitForCommands();

        await processCommand(command);
    }
}

main();

process.on('SIGINT', bye);
