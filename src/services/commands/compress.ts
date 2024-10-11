import path from "path";
import { cwd } from "../cwd";
import { compressFile } from "../../utils/compression";

export const compress = async (input: string) => {
    const filePath = path.resolve(cwd.get(), input.split(' ')[1]);
    const destinationPath = path.resolve(cwd.get(), input.split(' ')[2]);

    await compressFile(filePath, destinationPath);
};
