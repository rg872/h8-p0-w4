function fpb(angka1, angka2) {
  // you can only write your code here!
  var besar;
  var kecil;
  var result;

  if (angka1 > angka2) {
    besar = angka1;
    kecil = angka2;
  } else {
    besar = angka2;
    kecil = angka1;
  }

  for (var i = kecil; i > 0; i--) {
    if (besar % i === 0 && kecil % i === 0) {
      result = i;
      break;
    }
  }

  return result;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
