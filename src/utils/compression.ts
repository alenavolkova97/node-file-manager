import fs from 'fs';
import zlib from 'zlib';

export const manageFile = (inputPath: string, outputPath: string, operation: "compress" | "decompress") => {
  return new Promise<void>((resolve, reject) => {
    const readStream = fs.createReadStream(inputPath);
    const writeStream = fs.createWriteStream(outputPath);
    let brotliStream;

    switch (operation) {
      case 'compress': {
        brotliStream = zlib.createBrotliCompress();
  
        break;
      }

      case 'decompress': {
        brotliStream = zlib.createBrotliDecompress();
  
        break;
      }

      default: {
        throw new Error('Unknown operation');
      }
    }

    readStream
      .pipe(brotliStream)
      .pipe(writeStream)
      .on('finish', () => {
        resolve();
      })
      .on('error', (err) => {
        reject(err);
      });
  });
}
