#!/usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const repoUrl = "https://github.com/Shubhofficial1/globly";

const targetDir = process.cwd();

try {
  console.log("Cloning repository...");

  // Clone the repository into the current directory
  execSync(`git clone ${repoUrl} .`, { stdio: "inherit" });

  // Optionally, remove the .git folder if you want the project to not be a git repository
  fs.rmdirSync(path.join(targetDir, ".git"), { recursive: true });

  console.log("Project setup complete!");
} catch (error) {
  console.error("Error while setting up the project:", error.message);
  process.exit(1);
}
