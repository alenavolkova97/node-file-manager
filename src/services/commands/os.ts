import os from "os";
import { unknownCommand } from "../feedback";

export const osCommand = (input: string) => {
  const type = input.split(" ")[1];

  switch (type) {
    case "--EOL": {
      console.log(os.EOL);

      break;
    }

    case "--cpus": {
      const cpus = os.cpus();

      const cpusResult = cpus.map((cpu) => ({
        ...cpu,
        speedInGHz: cpu.speed / 1000,
      }));

      console.log(
        `CPUS amount: ${cpus.length}\nCPUS info: ${JSON.stringify(cpusResult, null, "  ")}`,
      );

      break;
    }

    case "--homedir": {
      console.log(os.homedir());

      break;
    }

    case "--username": {
      console.log(os.userInfo().username);

      break;
    }

    case "--architecture": {
      console.log(os.arch());

      break;
    }

    default: {
      unknownCommand(input);
    }
  }
};
