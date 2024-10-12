import path from "path";
import fs from "fs/promises";
import { cwd } from "../cwd";

export const rm = async (input: string) => {
  const absolutePathToFile = path.resolve(cwd.get(), input.split(" ")[1]);

  await fs.rm(absolutePathToFile, {
    recursive: true,
  });
};
