// Question 1
/*1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them.
Use the if-then-else construct available in JavaScript. Do some Googling to figure this out if you forget how conditionals work.*/

function maxOfTwoNumbers(x,y) {
  if (x < y) {
    return y;
  } else if (x > y)
  return x;
  }

// Question 2
/* 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.*/

function maxOfThree(x,y,z) {
 if (x > y && x > z);
 return x;

 if (y > x && y > z)
return y;

if (z > x && z > y)
return z;


// Question 3
vowel = ['a', 'e', 'i', 'o', 'u']
function isCharacterAVowel() {
  if vowel.indexOf() {
    return index;
  } else vowel.indexOf <= 0
    return false
}

// Question 4
function sumArray() {

}


// Question 4
/*4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
*/
function multiplyArray() {

}


// Question 5
var numberOfArguments = function(){

}



// Question 6
var reverseString = function (){

};


// Question 7
function findLongestWord () {

}


// Question 8
function filterLongWords () {

}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {

}


/*Follow the requirements in the list below:

1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript. Do some Googling to figure this out if you forget how conditionals work.
2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
3. Write a function `isCharacterAVowel` that takes a character (i.e., a string of length 1) and returns true if it is a vowel and false otherwise.
4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
5. Write a function that returns the number of arguments passed to the function when called.
6. Define a function `reverseString` that reverses a string. For example, reverseString("jag testar") should return the string "ratset gaj".
7. Write a function `findLongestWord` that takes an array of words and returns the length of the longest word in the array.
8. Write a function `filterLongWords` that takes an array of words and a number `i` and returns a new array of words that are longer than `i` characters long.


**Bonus**
For this bonus, you'll have to do some research on objects.

1. Write a function that takes a string as an argument and returns an object where:

  - The keys are the characters that occur in the string.
  - The values are the number of occurrences for each letter, regardless of the case.

For example, calling the function with the string "General Assembly" will return:

```javascript
{
  a: 2,
  b: 1,
  e: 3,
  g: 1,
  l: 2,
  m: 1,
  n: 1,
  r: 1,
  s: 2,
  y: 1
}
```

#### Starter Code

Open the file `main.js`. All the function names are already inside the file; you just need to implement the functions by adding code inside each one.

Use the Chrome Dev Tools console to practice executing your code.

Alternately, you can add `console.log();` statements in your `main.js` file; then you should see the values displayed in the console when you open the `index.html` file in your browser.

#### Deliverable

You'll review the answers with the instructor in class.



### ADDITIONAL RESOURCES

- Readings
	- [MDN Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
