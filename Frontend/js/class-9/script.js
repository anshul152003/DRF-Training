// string : The String object is used to represent and manipulate a sequence of characters.

//Strings can be created as primitives, from string literals, or as objects, using the String() constructor.
//let str1 = "A string primitive";
//let str2 = new String("Hello, World!"); // String object
//let string3 = `Yet another string primitive`; // Template literal

// string methods : The String object has many methods that allow you to manipulate strings in various ways also knows as Concatenation way.
/* + operator
let str1 = "Hello";
let str2 = "World";
let str3 = str1 + " " + str2; // Concatenation using the + operator
console.log(str3); // Output: Hello World */

/* concat() method
let str1 = "Hello";
let str2 = "World";
let str3 = str1.concat(" ", str2); // Concatenation using the concat() method 
console.log(str3); // Output: Hello World */

/* join() method
let strings = [s1, s2, s3];
let str = strings.join(" "); // Concatenation using the join() method
*/

/* string interpolation is done by use of template literals
let name = "John";
let age = 30;
let str = `My name is ${name} and I am ${age} years old.`; // String interpolation using template literals
console.log(str); // Output: My name is John and I am 30 years old. */


// array : An array is a data type that allows you to store multiple values in a single variable.

// how to get, add and remove elements from an array
// let arr = [1, 2, 3, 4, 5]; // Array declaration
// let firstElement = arr[0]; // Accessing the first element
// arr.push(6); // Adding an element to the end of the array
// arr.pop(); // Removing the last element from the array
// arr.shift(); // Removing the first element from the array
// arr.unshift(0); // Adding an element to the beginning of the array

// map() method : is used to create a new array by applying a function to each element of an existing array. It does not modify the original array.
/*let op = [8, 3, 5, 7, 9, 2, 4];
let modify = op.map((items) => {
    return items * 2;
});
console.log(modify); */

// filter() method : creates a new array containing only the elements that pass a specific condition (i.e., for which the callback returns true).
//return array of Elements;
/*let numbers = [8, 3, 5, 7, 9, 2, 4];
let ans = numbers.filter( (a) => {
    if(a % 2 === 0) {
        return a;
    }
});
console.log(ans); // [2, 4] */

/*let op = [8, 3, 5, 7, 9, 2, 4];
let modify = op.map((items) => {
    return items * 2;
}).filter((a) => {
    return a > 4;
});
console.log(modify); */

// find() method : is used to search for the first element in an array that satisfies a specified condition. It returns the value of the first element that matches the condition, or undefined if no such element is found.
/*let num = [8, 3, 5, 7, 9, 2, 4];
let findNum = num.find((a) => {
    return a > 3;
});
console.log(findNum); */

/*let op = [8, 3, 5, 7, 9, 2, 4];
let modify = op.map((items) => {
    return items * 2;
}).find((a) => {
    return a > 4;
});
console.log(modify);*/

// some() method : is used to check if at least one element in an array satisfies a specified condition. It returns true if at least one element matches the condition, and false otherwise.
/*let op = [8, 3, 5, 7, 9, 2, 4];
   let a = 3;
   let modify = op.some((it) => {
    if(a == op[it]) {
        return true;
    }
    return false;
});
console.log(modify); */

// reduce() method : reduces an array to a single value by applying a function to each element from left to right (or right to left with reduceRight()).
/*let operation = [8, 3, 5, 7, 9, 2, 4];
let sumOp = operation.reduce( (accumulator, currentValue) => {
    return accumulator + currentValue;
}, 2);
console.log(sumOp); */

// splice() method : 
/*let op = [3, 5, 9, 4, 11, 4];
let modify = op.splice(0, 0, 1, 2); // insert 1 and 2 at index 0
console.log(op); */

