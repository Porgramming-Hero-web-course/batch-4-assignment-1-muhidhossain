{
  // a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.
  const countWordOccurrences = (sentence: string, word: string): number => {
    sentence = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    const words = sentence.toLowerCase().split(' ');
    return words.filter((w) => w === word.toLowerCase()).length;
  };

  const sentence =
    'I love typescript. TypeScript is my favorite language. I love the TypeScript community.';
  const word = 'typescript';
  const count = countWordOccurrences(sentence, word);

  console.log(count);
  //
}
