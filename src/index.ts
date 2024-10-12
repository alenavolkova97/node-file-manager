import { processInput } from "./services/inputProcessor";
import { bye, greet, operationFailed } from "./services/feedback";
import { waitForUserInput } from "./services/inputReader";

greet();

const main = async () => {
  while (true) {
    const userInput = await waitForUserInput();

    try {
      await processInput(userInput);
    } catch (err) {
      operationFailed(err);
    }
  }
}

main();

process.on('SIGINT', () => {
  bye();

  process.exit(0);
});
