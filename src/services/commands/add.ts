import fs from 'fs/promises';
import path from 'path';
import { cwd } from '../cwd';

export const add = async (input: string) => {
  const fileName = input.split(' ')[1];

  const fd = await fs.open(path.resolve(cwd.get(), fileName), 'w');

  await fd.close();
};
