import "colors";
import {
  askForInformation,
  showFramework,
  showTitle,
} from "../common/index.js";

export const showResume = (resume) => {
  showTitle();
  console.log(`-> Framework selected: ${showFramework(resume.framework)}`);
  console.log(`-> Project Name: ${resume.projectName.green}\n\n`);
  return askForInformation("-> Do you want to continue? (Y/N): ");
};
