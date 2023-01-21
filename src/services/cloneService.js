import { exec } from "child_process";

export class CloneService {
  repositories = {
    "React JS":
      "https://github.com/JoseGaldamez/js-frameworks-template-basic-reactjs.git",
    "Angular JS": "https://github.com/JoseGaldamez/basic_rest_fastapi.git",
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

    console.log("\nProject cloned successfully!\n");
  }

  cloneProject = (url, projectName) => {
    return new Promise((resolve, reject) => {
      exec(`git clone ${url} ${projectName}`, (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          reject(false);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          resolve(true);
          return;
        }
        console.log(`stdout: ${stdout}`);
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
            console.log(`error: ${error.message}`);
            reject(false);
            return;
          }
          if (stderr) {
            console.log(`stderr: ${stderr}`);
            resolve(true);
            return;
          }
          console.log(`stdout: ${stdout}`);
          resolve(true);
        }
      );
    });
  };
}
