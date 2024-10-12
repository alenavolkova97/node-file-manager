import path from "path";
import { cwd } from "../cwd";
import fs from "fs";

export const cat = (input: string) => {
  const pathname = input.split(' ')[1];

  return new Promise<void>((resolve, reject) => {
    const absolutePathToFile = path.resolve(cwd.get(), pathname);

    const readableStream = fs.createReadStream(absolutePathToFile, { encoding: 'utf8' });

    readableStream.on('data', (chunk) => {
      console.log(chunk);
    });

    readableStream.on('error', (err) => {
      reject(err);
    });

    readableStream.on('end', () => {
      resolve();
    });
  });
}
