function ubahHuruf(kata) {
  // you can only write your code here!
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var huruf = [];
  var result = '';

  for (var i = 0; i < kata.length; i++) {
    for (var x = 0; x < alphabet.length; x++) {
      if (kata[i] === alphabet[x]) {
        huruf.push(alphabet[x + 1]);
      }
    }
  }

  for (var i = 0; i < huruf.length; i++) {
    result = result + huruf[i];
  }

  return result;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
