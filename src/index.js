const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
  ' ': ' '
};

function decode(expr) {
  // write your solution here
  let arr = [];

  while (expr !== '') {
    arr.push(expr.slice(0, 10));
    expr = expr.slice(10);
  }

  function translate(str) {
    if (str === '**********') {
      return ' '
    }
    let fullStr = '';
    let part;

    while (str !== '') {
      part = str.slice(0, 2);
      str = str.slice(2);

      if (part === '10') {
        fullStr += '.';
      }
      if (part === '11') {
        fullStr += '-';
      }
    }
    return fullStr;
  }

  return arr
    .map((el) => translate(el))
    .reduce((acc, el) => acc + MORSE_TABLE[el], '');
}

module.exports = {
  decode
};
