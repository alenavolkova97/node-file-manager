import path from "path"
import { cwd } from "../cwd"
import { calculateFileHash } from "../../utils/calculateFileHash";

export const hash = async (input: string) => {
    const filePath = path.resolve(cwd.get(), input.split(' ')[1]);

    const result = await calculateFileHash(filePath);

    console.log(result);
}
