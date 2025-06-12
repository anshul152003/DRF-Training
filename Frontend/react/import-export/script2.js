import {greet} from "./script1.js"; //when export is written inline
import {name} from "./script1.js"; //when export is written inline
import hello from "./script1.js"; //when export is written separately

hello(); 
greet();
console.log(`Name imported from script1.js: ${name}`);