import fs from 'fs/promises';
import path from 'path';
import { cwd } from '../cwd';

export const rn = async (input: string) => {
  const splitted = input.split(' ');

  const pathToFile = splitted[1];
  const newFileName = splitted[2];

  const oldAbsolutePathToFile = path.resolve(cwd.get(), pathToFile);
  const newAbsolutePathToFile = path.resolve(cwd.get(), newFileName);

  await fs.rename(oldAbsolutePathToFile, newAbsolutePathToFile);
}
