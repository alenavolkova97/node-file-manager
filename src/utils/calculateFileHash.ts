import fs from 'fs';
import crypto from 'crypto';

export function calculateFileHash(filePath: string) {
    return new Promise<string>((resolve, reject) => {
        const hash = crypto.createHash('sha256');
        const input = fs.createReadStream(filePath);

        input.on('data', chunk => {
            hash.update(chunk);
        });

        input.on('end', () => {
            const fileHash = hash.digest('hex');

            resolve(fileHash);
        });

        input.on('error', err => {
            reject(err);
        });
    });
}
