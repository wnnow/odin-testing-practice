const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const upperCaseAlphabet = alphabet.map((ele) => ele.toUpperCase());

function caesarCipher(str, shiftFactor) {
  const result = [];
  const strArr = str.split('');

  //create shiftedAlphabetArray List
  const shiftedAlphabetArr = createShiftedArray(shiftFactor);

  //if element equal to " " push element and skip to next one
  //get index of each character from alphabet array
  //then push the same index from shiftedAlphabetArr
  strArr.forEach((ele) => {
    if (ele === ' ') {
      result.push(ele);
    } else {
      const index = alphabet.indexOf(ele);
      result.push(shiftedAlphabetArr[index]);
    }
  });

  return result.join('');
}

function createShiftedArray(shiftFactor) {
  const shiftedArr = [];
  for (let i = 0; i < 26; i++) {
    shiftedArr.push(upperCaseAlphabet[shiftFactor % 26]);
    shiftFactor++;
  }
  return shiftedArr;
}

export { caesarCipher, alphabet };
