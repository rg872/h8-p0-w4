function hitungHuruf(kata) {
  var kata2 = kata.split(' ');
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var test = [];
  var test2 = [];
  var max = 0;
  var sum = 0;
  var result;

  for (var i = 0; i < kata2.length; i++) {
    test.push([]);
    for (var x = 0; x < alphabet.length; x++) {
      var count = 0;
      for (var y = 0; y < kata2[i].length; y++) {
        if (kata2[i][y].toLowerCase() === alphabet[x]) {
          count++;
        }
      }

      if (count != 0) test[i].push([alphabet[x], count]);
    }
  }

  for (var i = 0; i < test.length; i++) {
    var countx = 0;
    for (var x = 0; x < test[i].length; x++) {
      if (test[i][x][1] > 1) countx++;
    }

    test2.push(countx);
  }

  for (var i = 0; i < test2.length; i++) {
    if (test2[i] > max) {
      max = test2[i];
      result = kata2[i];
    }
  }

  if (max === 0) {
    result = -1;
  }

  return result;
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
console.log(hitungHuruf('bateri 45')); // danau
