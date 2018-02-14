function angkaPrima(angka) {
  // you can only write your code here!
  // Angka prima adalah angka yang lebih besar dari 1 dan hanya bisa dibagi
  // angka itu sendiri

  var result = true;

  for (var i = 2; i < angka; i++) {
    if (angka % i === 0) {
      result = false;
    }
  }

  return result;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
