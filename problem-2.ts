{
  // a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
  const removeDuplicates = (arrayOfNumbers: number[]): number[] => {
    const uniqueArray: number[] = [];
    arrayOfNumbers.forEach((number) => {
      if (!uniqueArray.includes(number)) {
        uniqueArray.push(number);
      }
    });
    return uniqueArray;
    // return [...new Set(arrayOfNumbers)];
  };

  const testArray = [1, 2, 2, 3, 4, 4, 5];
  const uniqueArray = removeDuplicates(testArray);

  console.log(uniqueArray);
  //
}
