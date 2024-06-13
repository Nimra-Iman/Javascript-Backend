// there are two types of modules: common JS modules and the second one is ES6 modules

// modules is liye use krty : maan lo k ek bht bra project h, ek hi file k ander rehty huy
// saary log kaam kry gy to mushkil ho ga, is liye hr koi alag alag apny apny modules bnay
// or developer ko bhej de ga , vo us saary modules ko main project k saath sync kr de ga

//   ******************  COMMON JS MODULES  *********************

// const hero = require("./97_common_js_modules.js")
// // hero(); //agar /97_common_js_modules.js k ander sirf ek hi function ho ga to esy kry gy
// hero.hello()
// hero.ahello("nimra")
// hero.ahello("iman")
// hero.ahello("kinza")
// hero.ahello("shiza") //agar musy is trah 50 logo ko use krna h to y lmba code ho ga
// // is liye m is ko esy kru gi destructuring kr k

// const {hello,ahello}=require("./97_common_js_modules.js")
// hello()
// ahello("nimra")
// ahello("kinza")

//   ***************  ES6 MODULES  **********************
import mycode, {hey,ahey} from "./97_ES6_modules.js" //is ko chlany k liye 
//  package.json ki file m "type: "module"" add kr do, abhi k liye y nhi chaly ga q k m n 
// "type: "module"" vhan s hta dia h, is code ko chlany s phly likh dena yaad s 
hey()
ahey("nimra")
ahey("iman")
mycode()



