import { add } from "./commands/add";
import { cat } from "./commands/cat";
import { cd } from "./commands/cd";
import { compress } from "./commands/compress";
import { cp } from "./commands/cp";
import { decompress } from "./commands/decompress";
import { hash } from "./commands/hash";
import { ls } from "./commands/ls";
import { mv } from "./commands/mv";
import { osCommand } from "./commands/os";
import { rm } from "./commands/rm";
import { rn } from "./commands/rn";
import { cwd } from "./cwd";
import { bye, unknownCommand } from "./feedback";

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

    case 'ls': {
      await ls();

      break;
    }

    case 'cat': {
      await cat(input);

      break;
    }

    case 'add': {
      await add(input);

      break;
    }

    case 'rn': {
      await rn(input);

      break;
    }

    case 'cp': {
      await cp(input);

      break;
    }

    case 'mv': {
      await mv(input);

      break;
    }

    case 'rm': {
      await rm(input);

      break;
    }

    case 'os': {
      osCommand(input);

      break;
    }

    case 'hash': {
      await hash(input);

      break;
    }

    case 'compress': {
      await compress(input);

      break;
    }

    case 'decompress': {
      await decompress(input);

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
      unknownCommand(command);
    }
  }
}
