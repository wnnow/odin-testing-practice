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

//Cipher
function createShiftedArray(shiftFactor) {
  const shiftedArr = [];
  for (let i = 0; i < 26; i++) {
    shiftedArr.push(upperCaseAlphabet[shiftFactor % 26]);
    shiftFactor++;
  }
  return shiftedArr;
}

function caesarCipher(str, shiftFactor) {
  const result = [];
  const strArr = str.split('');

  //create shiftedAlphabetArray List
  const shiftedAlphabetArr = createShiftedArray(shiftFactor);

  //if element equal to " " push element and skip to next one
  //get index of each character from alphabet array
  //then push the same index from shiftedAlphabetArr
  strArr.forEach((ele) => {
    const index = alphabet.indexOf(ele);
    if (index === -1) {
      result.push(ele);
    } else {
      result.push(shiftedAlphabetArr[index]);
    }
  });

  return result.join('');
}

//Decipher
function createDecipherShiftedArray(shiftFactor) {
  const shiftedArr = [];
  let decipherShiftFactor = 26 - (shiftFactor % 26);

  for (let i = 0; i < 26; i++) {
    shiftedArr.push(alphabet[decipherShiftFactor % 26]);
    decipherShiftFactor++;
  }

  return shiftedArr;
}

function caesarDeCipher(str, shiftFactor) {
  const result = [];
  const strArr = str.split('');

  //create deciphershiftedAlphabetArray List
  const decipherShiftedAlphabetArr = createDecipherShiftedArray(shiftFactor);

  //if element equal to " " push element and skip to next one
  //get index of each character from upperCaseAlphabet array
  //then push the same index from decipherShiftedAlphabetArr
  strArr.forEach((ele) => {
    const index = upperCaseAlphabet.indexOf(ele);
    if (index === -1) {
      result.push(ele);
    } else {
      result.push(decipherShiftedAlphabetArr[index]);
    }
  });

  return result.join('');
}

export { caesarCipher, caesarDeCipher };
