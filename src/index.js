import "colors";
import {
  chooseFramework,
  chooseProjectName,
  showResume,
} from "./helpers/index.js";

import { createProjectController } from "./controllers/createProject.controller.js";

/*
 * This is the main function of the application
 */
export const start = async () => {
  const framework = await chooseFramework();
  const projectName = await chooseProjectName(framework);
  const responseResume = await showResume({ framework, projectName });

  await createProjectController({
    framework,
    projectName,
    responseResume,
  });
};
