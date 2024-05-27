const fs = require("fs");
const path = require("path");

const libPath = path.join(__dirname);
const files = fs.readdirSync(libPath);

const exportedModules = {};

files.forEach((file) => {
  const filePath = path.join(libPath, file);
  const stats = fs.statSync(filePath);

  if (stats.isFile() && path.extname(file) === ".js") {
    const moduleName = path.basename(file, ".js");
    const requiredModule = require(filePath);

    if (typeof requiredModule === "object") {
      for (const functionName in requiredModule) {
        exportedModules[functionName] = requiredModule[functionName];
      }
    } else {
      exportedModules[moduleName] = requiredModule;
    }
  }
});

module.exports = exportedModules;
