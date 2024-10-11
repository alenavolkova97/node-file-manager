import path from "path";
import { cwd } from "../cwd";
import { decompressFile } from "../../utils/compression";


export const decompress = async (input: string) => {
    const filePath = path.resolve(cwd.get(), input.split(' ')[1]);
    const destinationPath = path.resolve(cwd.get(), input.split(' ')[2]);

    await decompressFile(filePath, destinationPath);
};
