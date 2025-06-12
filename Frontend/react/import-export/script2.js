import {greet} from "./script1.js"; 
// import {name} from "./script1.js";
import hello from "./script1.js"; 

const {namefromscript} = require("./script1.js");
console.log(namefromscript);

hello(); 
greet();
console.log(`Name imported from script1.js: ${name}`);