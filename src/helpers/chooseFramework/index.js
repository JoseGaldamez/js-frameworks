import inquirer from "inquirer";
import "colors";

import { frameworksOptions } from "./options.js";
import { showTitle } from "../common/index.js";

export const chooseFramework = () => {
  showTitle();
  return inquirer.prompt(frameworksOptions).then((answers) => {
    return answers.frameworks;
  });
};
