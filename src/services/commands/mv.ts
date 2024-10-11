import { rm } from "./rm";
import { cp } from "./cp";

export const mv = async (input: string) => {
    await cp(input.replace('mv', 'cp'));

    await rm(`rm ${input.split(' ')[1]}`);
};  
