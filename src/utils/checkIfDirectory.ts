import fs from "fs/promises";

export const checkIfDirectory = async (dirPath: string) => {
  try {
    const stats = await fs.stat(dirPath);

    return stats.isDirectory();
  } catch (error) {
    return false;
  }
};
