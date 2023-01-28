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
    await cloneService.clone(framework, projectName);

    console.log("\n\n================= DONE =================\n");
    console.log(`\ncd ${projectName}`);
    console.log("npm install\n");

    console.log("\n\nThanks for using JS Frameworks!\n\n".green);
  } else {
    console.log("\n\n-> Canceling project creation...".red);
  }
};
