function totalDigitRekursif(angka) {
  var str = String(angka);
  if (str.length === 1) {
    return angka;
  } else {
    var arr = str.split('');
    var num = Number(arr.shift());
    var rek = Number(arr.join(''));
    return num + totalDigitRekursif(rek);
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
