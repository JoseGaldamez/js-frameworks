import "colors";
import { validateYesOrNoQuestion } from "../helpers/index.js";
import { CloneService } from "../services/cloneService.js";

const cloneService = new CloneService();

export const createProjectController = async ({
  framework,
  projectName,
  responseResume,
}) => {
  if (validateYesOrNoQuestion(responseResume)) {
    cloneService.clone(framework, projectName);
  } else {
    console.log("\n\n-> Canceling project creation...".red);
  }
  console.log("\n\nThanks for using JS Frameworks!\n\n".green);
};
