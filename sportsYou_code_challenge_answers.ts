// 1. Write a Typescript function to calculate the average of an array of numbers.


interface AverageOfNums {
  (numbers: number[]): number;
};
const arrayOfNumbers = [ 1, 6, 8, 7, 12.7, 5.5 ];

const sumOfNumbers: AverageOfNums = numbers => {
  if (numbers.length === 0) {
    return 0;
  } 
  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const average = sum / numbers.length;
    return average;
} 

const averageResult = sumOfNumbers(arrayOfNumbers);
console.log('Average of numbers: ', averageResult);


// 2. Write a Typescript function to remove all duplicate words from a string, leaving only single (first) words entries. Example: 
// Input: 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta' 
// Output: 'alpha beta gamma delta'

const input = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta';

function removeDuplicatedWords (input: string): string {
  const words = input.split(' ');  // split the input into an array of words
  const setOfWords = new Set<string>(); // new Set constructs a new instance of the Set object. Stores unique values and does not allow add a duplicated 

  const filteredWords = words.filter(word => {
    if (!setOfWords.has(word)) {
      setOfWords.add(word);
      return true;
    }
    return false;
  });

return filteredWords.join(' ');
};

const removeWordResult = removeDuplicatedWords(input);
console.log(removeWordResult);