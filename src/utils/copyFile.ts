import fs from 'fs';

export function copyFile(filePath1: string, filePath2: string) {
    return new Promise<void>((resolve, reject) => {
        const readableStream = fs.createReadStream(filePath1);
        const writableStream = fs.createWriteStream(filePath2);

        readableStream.on('error', (err) => {
            reject(err);
        });

        writableStream.on('error', (err) => {
            reject(err);
        });

        readableStream.pipe(writableStream).on('finish', () => {
            resolve();
        });
    });
}
