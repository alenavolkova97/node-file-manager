import path from "path";
import { cwd } from "../cwd";
import { manageFile } from "../../utils/compression";

export const compress = async (input: string) => {
  const absolutePathToFile = path.resolve(cwd.get(), input.split(" ")[1]);
  const absolutePathToDestination = path.resolve(
    cwd.get(),
    input.split(" ")[2],
  );

  if (absolutePathToDestination.endsWith(".br") === false) {
    throw new Error("Destination should end with '.br'");
  }

  await manageFile(absolutePathToFile, absolutePathToDestination, "compress");
};
