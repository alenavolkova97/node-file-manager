import { processCommand } from "./services/commandProcessor";
import { bye, greet, operationFailed } from "./services/feedback";
import { waitForCommands } from "./services/inputReader";

greet();

async function main() {
    while (true) {
        const command = await waitForCommands();

        try {
            await processCommand(command);
        } catch (err) {
            operationFailed();
        }
    }
}

main();

process.on('SIGINT', bye);
