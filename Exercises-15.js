function changeVocals(str) {
  var alphabet = [['a', 'b'], ['i', 'j'], ['u', 'v'], ['e', 'f'], ['o', 'p']];
  var arr = str.split(' ');

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split('');
    for (var x = 0; x < arr[i].length; x++) {
      for (var y = 0; y < alphabet.length; y++) {
        if (arr[i][x] === alphabet[y][0].toUpperCase()) {
          arr[i][x] = alphabet[y][1].toUpperCase();
        } else if (arr[i][x] === alphabet[y][0]) {
          arr[i][x] = alphabet[y][1];
        }
      }
    }

    arr[i] = arr[i].join('');
  }

  arr = arr.join(' ');
  return arr;
}

function reverseWord(str) {
  var result = '';
  for (var i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }

  return result;
}

function setLowerUpperCase(str) {
  var arr = str.split(' ');

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split('');
    for (var x = 0; x < arr[i].length; x++) {
      if (arr[i][x] === arr[i][x].toUpperCase()) {
        arr[i][x] = arr[i][x].toLowerCase();
      } else if (arr[i][x] === arr[i][x].toLowerCase()) {
        arr[i][x] = arr[i][x].toUpperCase();
      }
    }

    arr[i] = arr[i].join('');
  }

  arr = arr.join(' ');
  return arr;
}

function removeSpaces(str) {
  if (str.length > 4) {
    var arr = str.split(' ');
    return arr.join('');
  } else {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }
}

function passwordGenerator(name) {
  var changed = changeVocals(name);
  var reserved = reverseWord(changed);
  var cased = setLowerUpperCase(reserved);
  var removed = removeSpaces(cased);

  return removed;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
