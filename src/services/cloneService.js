import { exec } from "child_process";
import fs from "fs";
import "colors";

export class CloneService {
  repositories = {
    "React JS":
      "https://github.com/JoseGaldamez/js-frameworks-template-basic-reactjs.git",
    Angular:
      "https://github.com/JoseGaldamez/js-frameworks-templates-basic-angular-ts.git",
    "Vue JS": "https://github.com/JoseGaldamez/basic_rest_fastapi.git",
    "Svelte JS": "https://github.com/JoseGaldamez/basic_rest_fastapi.git",
    "Next JS": "https://github.com/JoseGaldamez/basic_rest_fastapi.git",
  };

  constructor() {
    this.clone = this.clone.bind(this);
  }

  async clone(framework, projectName) {
    console.log("Cloning repository...");
    const url = this.repositories[framework];
    if (url === undefined) {
      throw new Error("Framework not found");
    }
    const projectCloned = await this.cloneProject(url, projectName);
    if (!projectCloned) {
      throw new Error("Project not cloned");
    }
    const gitCleared = await this.clearGit(projectName);

    if (!gitCleared) {
      throw new Error("Git not cleared");
    }

    const packageRenamed = await this.renamePackage(projectName);

    if (!packageRenamed) {
      throw new Error("No renamed package.json");
    }
    console.log("\nProject cloned successfully!\n".blue);
  }

  cloneProject = (url, projectName) => {
    return new Promise((resolve, reject) => {
      exec(`git clone ${url} ${projectName}`, (error, stdout, stderr) => {
        if (error) {
          console.log(`${"Error".red}: ${error.message}`);
          reject(false);
          return;
        }
        if (stderr) {
          console.log(`${stderr}`);
          resolve(true);
          return;
        }
        console.log(`${stdout}`);
        resolve(true);
        return;
      });
    });
  };

  clearGit = (projectName) => {
    return new Promise((resolve, reject) => {
      exec(
        `cd .\\${projectName}\\ && git checkout --orphan latest_branch && git branch -D main && git branch -m main && git remote remove origin`,
        (error, stdout, stderr) => {
          if (error) {
            console.log(`${"Error".red}: ${error.message}`);
            reject(false);
            return;
          }
          if (stderr) {
            console.log(`${stderr}`);
            resolve(true);
            return;
          }
          console.log(`${stdout}`);
          resolve(true);
        }
      );
    });
  };

  renamePackage = async (projectName) => {
    return new Promise((resolve, reject) => {
      fs.readFile(
        `.\\${projectName}\\package.json`,
        "utf-8",
        function (err, data) {
          if (err) {
            reject(err);
            throw err;
          }

          console.log("Renaming package.json...");

          var newInfoFile = data.replace(
            "js-frameworks-template-basic-reactjs",
            projectName
          );
          fs.writeFile(
            `.\\${projectName}\\package.json`,
            newInfoFile,
            "utf-8",
            function (err) {
              if (err) {
                console.log(`${"Error".red}: ${err}`);
                reject(err);
                throw err;
              }
              resolve(true);
            }
          );
        }
      );
    });
  };
}
