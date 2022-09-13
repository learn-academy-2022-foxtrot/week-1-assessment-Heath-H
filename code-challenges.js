// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create the code that determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// // Expected outcome: "banana"


// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create the code that determines if a given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process: i used an if/else if statement for the water temperature problem 

// var temp = 350
// // Expected output: "42 is below boiling point"
// if(temp < 212) 
//     console.log("temp is below boiling pont.")



// else if(temp > 212) 
//     console.log("temp is above boiling point")


// // // const temp = 350
// // // Expected output: "350 is above boiling point"
// else if(temp > 212) 
//     console.log("temp is above boiling point")


// // // const temp = 212
// // // Expected output: "212 is at boiling point"
// else if(temp === 212) 
//     console.log("temp is at boiling point")

// // --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// // Describe your process:
// // to combine the two arrays, you should use .concat()
// let padresCombinedArrays 
// //combine both with .concat and then add .length to the end
// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4];
// const padres1998WorldSeriesRuns = [6, 3, 5, 3];
// padresCombinedArrays = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length;
// //var homeRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
// console.log(padresCombinedArrays)


// //I cannot figure out number 2 for the life of meeeee
// //okay it was a dumb mistake, I forgot to add: let padresCombinedArrays...
// // Expected output: 9, actual outcome = 9 






// // --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// // Describe your process:

// const currentCohort = ["Foxtrot 2022"]
// // first you want to split all of the elements using .split
// let split = "Foxtrot 2022".split("")
// console.log(split)
// // outcome = "F", "o", "x", "t", "r", "o", "t", "2", "0", "2", "2"
// // then reverse the elements of the split array
// let reversedArray = split.reverse()
// console.log(reversedArray)
// // outcome = 2 2 0 2 t o r t x o f in "" separated by commas 
// //then you'd want to join the reversed and split elements using .join
// let joinedElements = reversedArray.join("")
// console.log(joinedElements)

// // Expected output: "2202 tortxoF"
// actual outcome was as expected



// // --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// // Describe your process: you'd want to use .lastIndexOf in order to get the outcome of 7

// const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
// const givenValue1 = 42
// console.log(myNumbers.lastIndexOf(givenValue1))

// // // Expected output: 7, actual outcome = 7

// // you would do the same thing for the next portion of this question, except you would want to type (givenValue2) instead
// const givenValue2 = 10
// console.log(myNumbers.lastIndexOf(givenValue2))
// // Expected output: 8, actual outcome = 8

// // --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// // Describe your process: sort the numbers from biggest to smallest using .sort()

// const sortTemp = (temp) => {
//     return console.log(temp.sort().reverse())
// };

// const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// // // Expected output: [82, 80, 79, 77, 76, 73, 72]

// const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// // // Expected output: [68, 67, 66, 66, 62, 59, 59]

// sortTemp(sanDiegoSummerTemperatures);

// sortTemp(sanDiegoWinterTemperatures);

// remember to look for typos... i spent 20 minutes trying to run this one and didnt pay attention to spelling errors and forgot curly braces
