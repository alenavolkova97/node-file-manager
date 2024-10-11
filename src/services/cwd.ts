import os from 'os';
import path from 'path';

class Cwd {
  private currentPath: string;

  constructor() {
    this.currentPath = os.homedir();
  }

  get() {
    return this.currentPath;
  }

  up() {
    const newPath = path.resolve(this.currentPath, '..');

    this.currentPath = newPath;
  }

  change(pathname: string) {
    if (path.isAbsolute(pathname)) {
      this.currentPath = pathname;

      return;
    }

    this.currentPath = path.resolve(this.currentPath, pathname);
  }
}

export const cwd = new Cwd();
