function cariModus(arr) {
  // you can only write your code here!
  arr = arr.sort(function (value1, value2) { return value1 < value2;});
  var modus = 0;
  var count = 0;
  var sum = 0;

  for (var z = 0; z < arr.length; z++) {
    sum = sum + arr[z];
  }

  if (sum / arr.length === arr[0]) return -1;

  for (var i = 0; i <= arr[0]; i++) {
    var compare = 0;
    for (var x = 0; x < arr.length; x++) {
      if (arr[x] === i) {
        compare++;
      }
    }

    if (count < compare) {
      modus = i;
      count = compare;
    }
  }

  if (count === 1) return -1;

  return modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
