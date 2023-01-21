import "colors";
import {
  chooseFramework,
  chooseProjectName,
  showResume,
} from "./helpers/index.js";

export const start = async () => {
  const framework = await chooseFramework();
  const projectName = await chooseProjectName(framework);
  const ok = await showResume({ framework, projectName });

  if (ok.toLowerCase() === "y") {
    console.log("\n\nInformation to create the project...\n\n");
    console.log({ framework, projectName });
    console.log("\n\n-> Creating project...".green);
  } else {
    console.log("\n\n-> Canceling project creation...".red);
  }
  console.log("\n\nThanks for using JS Frameworks!\n\n".green);
};
