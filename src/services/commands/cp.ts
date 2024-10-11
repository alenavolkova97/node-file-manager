import fs from 'fs/promises';
import path from 'path';
import { cwd } from '../cwd';
import { copyFile } from '../../utils/copyFile';

async function isDirectory(dirPath: string) {
    try {
        const stats = await fs.stat(dirPath);
        
        return stats.isDirectory();
    } catch (error) {
        const splitted = dirPath.split('/');

        return splitted[splitted.length - 1].includes('.') ? false : true;
    }
}

export const cp = async (input: string) => {
    const splitted = input.split(' ');

    const filename = splitted[1];

    const pathToFile = path.resolve(cwd.get(), filename);
    const pathToNewDirectory = path.resolve(cwd.get(), splitted[2]);

    await copyFile(
        pathToFile,
        await isDirectory(pathToNewDirectory)
            ? path.resolve(pathToNewDirectory, filename)
            : pathToNewDirectory
    );

};
