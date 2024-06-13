const sr="harry is very very nice boy very awesome"
// if i have to repllace all "very" in string with some other letter, and if i do it via
console.log(sr.replace("very","VERY"))  //then only first occurence will replace, i want to
// replca all occurances, that's why i will use REGULAR EXPRESSIONS


const regex=/very/g //g for global, yani saary "very" ko replace kr do
const str="nimra is very very nice girl very awesome"
console.log(str.replace(regex,"VERY")) //this is VIP interview question

// visit "regexr.com" for full understanding  