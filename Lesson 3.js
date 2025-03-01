// ////////////////////////////////////////////////////  Lesson 3: Data Types \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// JavaScript me 5 main data types hote hain:


// Data Type	Example
// String	"Hello"
// Number	25, 3.14
// Boolean	true, false
// Array	["Apple", "Banana"]
// Object	{ name: "Ali", age: 18 }

//  Example
let message = "Welcome to JavaScript!";
let price = 199.99;
let isStudent = true;
let colors = ["Red", "Green", "Blue"];
let person = { name: "Ali", age: 18 };

console.log(message, price, isStudent, colors, person);

// Tumhara Task (Practice Karo!) Task One
//  Task 1: Console me apna naam aur umar print karo.
//  Task 2: 3 favorite colors ko ek array me store karo.
//  Task 3: Ek object banao jo tumhara name, age, aur city store kare.

// Task for You! Task Two
// 1️ Apne 3 favorite fruits ka ek array banao.
// 2️ Console me 2nd fruit ko print karo.
// 3️ Ek naya fruit add karo aur updated array print karo.

//  Task for You: Task Three
// 1️ Apne 3 favorite cities ka ek array banao.
// 2️ Console me pehla city print karo.
// 3️ Ek naya city add karo aur updated array print karo.

//  Task for You: Task Four
//  Task for You:
// 1️ Apne 5 favorite foods ka ek array banao.
// 2️ 3rd food ko console me print karo.
// 3️ Ek naya food add karo aur updated array print karo.

//  Task for You: Task Five
// Task for You:
// 1️ Ek 5 car names ka array banao.
// 2️ 2nd car ko print karo.
// 3️ Ek nayi car add karo aur updated array print karo.

//  Task for You: Task Six
// Task for You:
// 1️ Apne 4 favorite games ka array banao.
// 2️ 3rd game ko print karo.
// 3️ Ek naya game add karo aur updated array print karo.

//  Task for You:
// 1️ Apne 3 favorite programming languages ka array banao.
// 2️ 2nd language ko print karo.
// 3️ Ek aur new language add karo aur updated array print karo.
let programming = ["C++", "JavaScript", "Python"];
console.log(programming[1]);
programming.push("Java");
console.log(programming);  


// ////////////////////////////////////////  Agle Steps (Advance Array Methods)  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// 1️ Pehli programming language change karo:
programming[0] = "C";
console.log(programming);
// Output:
// ["C", "JavaScript", "Python", "Java"]

// 2️ Ek new language shuru me add karo (unshift method)
programming.unshift("Ruby");
console.log(programming);
// Output:
// ["Ruby", "C", "JavaScript", "Python", "Java"]

// 3️ Kisi bhi ek language remove karo (splice method)
programming.splice(2, 1); // 3rd language remove karega
console.log(programming);
// Output:
// [ 'Ruby', 'C', 'Python', 'Java' ]



