// TASK 1
console.log("Task 1");

// Write a program that uses a for loop to output the 
// numbers from 1 to 10 to the console.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// TASK 2
console.log("Task 2");

// Write a program that uses a for loop to output the even numbers from 0
// to 20 to the console.

for (let i = 2; i <= 20; i = i+2) {
    console.log(i);
}

// TASK 3
console.log("Task 3");

// Write a program that uses a for loop to output the Fibonacci sequence
// up to a 20 numbers.

let firstNum = 0;
let secondNum = 1;
console.log(firstNum);
console.log(secondNum);

for(let i = 0; i < 20; i++){

    let result= firstNum + secondNum;
    console.log(result);
    firstNum = secondNum;
    secondNum = result; 

}

// TASK 4
console.log("Task 4");

// Write a program that uses a for loop to output a
//  multiplication table for
// a certain number entered by the user.
//  For example, if the user enters 5,
// the program could output:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50

let num = prompt("Enter a number for the multiplication table");

for(let i = 0; i <= 10; i++){
    console.log(`${num} * ${i} = ${num * i}`);
}

// TASK 5
console.log("Task 5");

// Question 2
// There are two gymnastics teams, Dolphins and Koalas.

// They compete against each other 3 times. The winner with the highest average
// score wins a trophy!
// Your Tasks
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the
// competition, and print it to the console.
// Don't forget that there can be a draw, so test for that as well (draw means they
// have the same average score)

// Test data:
// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// Data 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// Data 3: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const dolphinsScores = [[96, 108, 89], [97, 112, 101], [97, 112, 101],];
const koalasScores = [[88, 91, 110], [109, 95, 123], [109, 95, 106],];
  
  for (let i = 0; i < dolphinsScores.length; i++) {
    let dolphinsTotal = 0;
    let koalasTotal = 0;
  
    for (let j = 0; j < 3; j++) {
      dolphinsTotal += dolphinsScores[i][j];
      koalasTotal += koalasScores[i][j];
    }
  
    const dolphinsAverage = dolphinsTotal / 3;
    const koalasAverage = koalasTotal / 3;
  
    if (dolphinsAverage > koalasAverage) {
      console.log("Dolphins win!");
    } else if (dolphinsAverage < koalasAverage) {
      console.log("Koalas win!");
    } else {
      console.log("It's a draw");
    }
  }
  