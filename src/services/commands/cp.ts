import path from "path";
import { cwd } from "../cwd";
import { copyFile } from "../../utils/copyFile";
import { checkIfDirectory } from "../../utils/checkIfDirectory";

export const cp = async (input: string) => {
  const splitted = input.split(" ");

  const pathToFile = splitted[1];

  const absolutePathToFile = path.resolve(cwd.get(), pathToFile);
  const fileName = absolutePathToFile.slice(
    absolutePathToFile.lastIndexOf("/") + 1,
  );

  const absolutePathToNewDirectory = path.resolve(cwd.get(), splitted[2]);

  if ((await checkIfDirectory(absolutePathToNewDirectory)) === false) {
    throw new Error("Second argument should be an existing directory...");
  }

  await copyFile(
    absolutePathToFile,
    path.resolve(absolutePathToNewDirectory, fileName),
  );
};
