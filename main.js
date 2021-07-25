let helpObj=require("./command/help");
let treeObj=require("./command/tree");
let organizeObj=require("./command/organize");
let inputArr=process.argv.slice(2);
let command=inputArr[0];
switch(command){
    case "tree":
        //node maine.js tree path
        treeObj.treefxn(inputArr[0]);
        break;
    case "orginize":
        organizeObj.organizefxn(inputArr[1]);
        break;
    case "help":
        helpObj.helpfxn();
        break;
        default:
            console.log("Kindaly enter the correct cmd");g
      
}
