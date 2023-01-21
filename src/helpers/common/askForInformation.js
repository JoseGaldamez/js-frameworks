import { createInterface } from "readline";

export const askForInformation = (ask) => {
  const readName = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    readName.question(ask, (answer) => {
      readName.close();
      resolve(answer);
    });
  });
};
