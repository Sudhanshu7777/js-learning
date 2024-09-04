const name = "sudhanshu"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sudhanshu-hc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('d'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-14,4)
console.log(anotherString);

const newStringOne = "  sudhanshu  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sudhanshu.com/sudhanshu%20gupta"

console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));


