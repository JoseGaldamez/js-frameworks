import "colors";
import { validateYesOrNoQuestion } from "../helpers/index.js";

export const createProjectController = async ({
  framework,
  projectName,
  responseResume,
}) => {
  if (validateYesOrNoQuestion(responseResume)) {
    console.log("\n\nInformation to create the project...\n\n");
    console.log({ framework, projectName });
    console.log("\n\n-> Creating project...".green);
  } else {
    console.log("\n\n-> Canceling project creation...".red);
  }
  console.log("\n\nThanks for using JS Frameworks!\n\n".green);
};
