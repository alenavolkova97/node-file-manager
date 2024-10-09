import { cwd } from "../cwd";

export const cd = (input: string) => {
    const pathname = input.split(' ')[1];

    cwd.change(pathname);
}
