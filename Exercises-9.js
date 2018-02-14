function tukarBesarKecil(kalimat) {
  var str = kalimat.split(' ');
  var words = [];

  for (var i = 0; i < str.length; i++) {
    words.push(str[i].split(''));
  }

  for (var i = 0; i < words.length; i++) {
    for (var x = 0; x < words[i].length; x++) {
      if (words[i][x] === words[i][x].toUpperCase()) {
        words[i][x] = words[i][x].toLowerCase();
      } else if (words[i][x] === words[i][x].toLowerCase()) {
        words[i][x] = words[i][x].toUpperCase();
      }

      if (x === words[i].length - 1) {
        words[i] = words[i].join('');
      }
    }
  }

  return words.join(' ');
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
