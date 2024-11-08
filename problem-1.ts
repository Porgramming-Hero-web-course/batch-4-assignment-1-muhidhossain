{
  // a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
  const sumArray = (arrayOfNumbers: number[]): number => {
    return arrayOfNumbers.reduce((acc, curr) => acc + curr, 0);
  };

  const testArray = [1, 2, 3, 4, 5];
  const sum = sumArray(testArray);

  console.log(sum);
  //
}
