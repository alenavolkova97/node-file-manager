import fs from 'fs/promises';
import path from 'path';
import { cwd } from '../cwd';

export const rn = async (input: string) => {
    const splitted = input.split(' ');

    const oldFilename = splitted[1];
    const newFilename = splitted[2];

    const oldFilepath = path.resolve(cwd.get(), oldFilename);
    const newFilepath = path.resolve(cwd.get(), newFilename);

    await fs.rename(oldFilepath, newFilepath);
}
