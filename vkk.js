let srcFilePath="";
let destDir="";
let tobeCopiedFileName=path.basename(srcFile);
let destPath=path.join(destDir,tobeCopiedFileName);
false.sopyFileSync(srcFilePath,destPath);
console.log("File copied");