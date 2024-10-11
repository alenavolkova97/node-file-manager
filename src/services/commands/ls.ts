import fs from 'fs/promises';
import { cwd } from '../cwd';

export const ls = async () => {
  const result = await fs.readdir(cwd.get(), { withFileTypes: true });

  result.sort((a, b) => a.isDirectory() ? -1 : 1);

  const stringified = result.map((item, index) => {
    return `${String(index).padStart(3, ' ')} ${item.isDirectory() ? 'd' : 'f'} ${item.name}${item.isDirectory() ? '/' : ''}`
  }).join('\n');

  console.log(stringified);
};
