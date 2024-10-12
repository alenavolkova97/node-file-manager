import { cwd } from "../cwd";

export const cd = async (input: string) => {
  const pathname = input.split(" ")[1];

  await cwd.change(pathname);
};
