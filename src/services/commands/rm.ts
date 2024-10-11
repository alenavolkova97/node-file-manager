import path from "path";
import fs from 'fs/promises';
import { cwd } from "../cwd";

export const rm = async (input: string) => {
  const filePath = path.resolve(cwd.get(), input.split(' ')[1]);

  await fs.rm(filePath, {
    recursive: true
  });
};
