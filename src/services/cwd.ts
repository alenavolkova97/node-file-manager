import os from "os";
import path from "path";
import { checkIfDirectory } from "../utils/checkIfDirectory";

class Cwd {
  private currentPath: string;

  constructor() {
    this.currentPath = os.homedir();
  }

  get() {
    return this.currentPath;
  }

  up() {
    const newAbsolutePathToFile = path.resolve(this.currentPath, "..");

    this.currentPath = newAbsolutePathToFile;
  }

  async change(pathname: string) {
    let tryPath: string | null = null;

    if (path.isAbsolute(pathname)) {
      tryPath = pathname;
    } else {
      tryPath = path.resolve(this.currentPath, pathname);
    }

    if (await checkIfDirectory(tryPath)) {
      this.currentPath = tryPath;
    } else {
      throw new Error("Path should be an existing directory...");
    }
  }
}

export const cwd = new Cwd();
