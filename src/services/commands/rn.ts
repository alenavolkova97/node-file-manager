import fs from 'fs/promises';
import path from 'path';
import { cwd } from '../cwd';

export const rn = async (input: string) => {
  const splitted = input.split(' ');

  const oldFileName = splitted[1];
  const newFileName = splitted[2];

  const oldFilepath = path.resolve(cwd.get(), oldFileName);
  const newFilepath = path.resolve(cwd.get(), newFileName);

  await fs.rename(oldFilepath, newFilepath);
}
