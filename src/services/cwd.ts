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
}

export const cwd = new Cwd();
