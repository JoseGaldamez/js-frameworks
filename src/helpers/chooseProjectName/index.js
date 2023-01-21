import "colors";
import {
  showFramework,
  askForInformation,
  showTitle,
} from "../common/index.js";

export const chooseProjectName = (framework) => {
  showTitle();
  console.log(`-> Framework selected: ${showFramework(framework)}\n\n`);
  return askForInformation("-> Enter a project name: ");
};
