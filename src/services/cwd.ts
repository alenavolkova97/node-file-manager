import os from 'os';

class Cwd {
    private currentPath: string;

    constructor() {
        this.currentPath = os.homedir();
    }

    get() {
        return this.currentPath;
    }
}

export const cwd = new Cwd();
