import { processInput } from "./services/inputProcessor";
import { bye, greet, operationFailed } from "./services/feedback";
import { waitForUserInput } from "./services/inputReader";

greet();

async function main() {
    while (true) {
        const userInput = await waitForUserInput();

        try {
            await processInput(userInput);
        } catch (err) {
            operationFailed();
        }
    }
}

main();

process.on('SIGINT', bye);
