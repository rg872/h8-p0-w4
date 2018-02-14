function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var mid = 0;
  var factor = [];
  var min = 0;

  if (angka % 2 === 0) {
    mid = angka / 2;
  } else {
    mid = Math.ceil(angka / 2);
  }

  for (var i = 1; i <= angka; i++) {
    for (var x = 1; x <= angka; x++) {
      if (i * x === angka) {
        factor.push([i, x]);
      }
    }
  }

  if (factor.length > 1) factor = factor.slice(0, factor.length / 2);

  for (var i = 0; i < factor.length; i++) {
    factor[i] = factor[i].join('');
    if (min === 0) {
      min = factor[i].length;
    } else if (min > factor[i].length) {
      min = factor[i].length;
    }
  }

  return min;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
