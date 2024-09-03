// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsidetemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 345633526632652n



// Refrence (Non Primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj ={
    name: "sudhanshu",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");    
}

console.log(typeof heroes);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++++++++++++++++++++++++++

// stack(Primitive), Heap(Non-Primitive)

let myname = "Sudhanshu"

let anothername = myname
anothername = "priyanshu"

console.log(myname);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "sudhanshu@google.com"

console.log(userOne.email);
console.log(userTwo.email);




