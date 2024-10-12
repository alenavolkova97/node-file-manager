import fs from "fs";
import crypto from "crypto";

export const calculateFileHash = (filePath: string) => {
  return new Promise<string>((resolve, reject) => {
    const hash = crypto.createHash("sha256");
    const readStream = fs.createReadStream(filePath);

    readStream.on("data", (chunk) => {
      hash.update(chunk);
    });

    readStream.on("end", () => {
      const fileHash = hash.digest("hex");

      resolve(fileHash);
    });

    readStream.on("error", (err) => {
      reject(err);
    });
  });
};
