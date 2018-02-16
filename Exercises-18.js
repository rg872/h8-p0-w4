function kaliTerusRekursif(angka) {
  var str = String(angka);
  var arr = str.split('');
  var sum = 1;
  for (var i = 0; i < arr.length; i++) {
    sum = sum * Number(arr[i]);
  }

  if (String(sum).length === 1) {
    return sum;
  }else {
    return kaliTerusRekursif(sum);
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
