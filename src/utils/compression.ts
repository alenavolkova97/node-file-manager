import fs from 'fs';
import zlib from 'zlib';

export const compressFile = (inputPath: string, outputPath: string) => {
  return new Promise<void>((resolve, reject) => {
    const readStream = fs.createReadStream(inputPath);
    const writeStream = fs.createWriteStream(outputPath);
    const brotliCompress = zlib.createBrotliCompress();

    readStream
      .pipe(brotliCompress)
      .pipe(writeStream)
      .on('finish', () => {
        resolve();
      })
      .on('error', (err) => {
        reject();
      });
  });
}

export const decompressFile = (inputPath: string, outputPath: string) => {
  return new Promise<void>((resolve, reject) => {
    const readStream = fs.createReadStream(inputPath);
    const writeStream = fs.createWriteStream(outputPath);
    const brotliDecompress = zlib.createBrotliDecompress();

    readStream
      .pipe(brotliDecompress)
      .pipe(writeStream)
      .on('finish', () => {
        resolve();
      })
      .on('error', (err) => {
        reject();
      });
  });
}
