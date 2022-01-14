/*Create a function that takes a number as a parameter. This function will print out (console.log()) every number from 1 to the number passed as the parameter, now:
- if the number is divisible by 3 then the function will print out the word 'Fizz' instead of the number.
- if the number is divisible by 3 and 5 then the function will print out the word 'Fizz Buzz' instead of the number.


Submit the github link to the repo containing the code, your reasoning and pseudo code of the solution for the problem (code comments).
you may use google search to solve the problem but if you do YOU MUST: 


1. cite where you got it from. 
2. state why you didn't try to solve the problem on your own.
3. write a detailed summary of every line of code you copied explaining what it is happening on said line of code. */


function FizzBuzz(param) {
    for(let i = 1; i < param; i++) { //Loops from 1 to actual number
        if (i % 15 == 0) { // Divisible by both
            console.log('Fizz Buzz'); //Has to be first (will automatically solve)
        }
        else if (i % 3 == 0) { //only divisible by 3
            console.log('Fizz');
        }
        else if (i % 5 == 0) { //Only Divisible by 5
            console.log('Buzz')
        }
        else { // Just normal print
            console.log(i);
        }
    }
}

FizzBuzz(20);