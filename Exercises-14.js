function sorting(arrNumber) {
  for (var i = 0; i < arrNumber.length; i++) {
    for (var x = 0; x < arrNumber.length; x++) {
      if (arrNumber[i] > arrNumber[x]) {
        var holder = arrNumber[i];
        arrNumber[i] = arrNumber[x];
        arrNumber[x] = holder;
      }
    }
  }

  return arrNumber;
}

function getTotal(arrNumber) {
  var count = 0;
  if (typeof arrNumber !== 'undefined' && arrNumber !== null && arrNumber.length !== null && arrNumber.length > 0) {
    for (var i = 0; i < arrNumber.length; i++) {
      if (arrNumber[0] === arrNumber[i]) {
        count++;
      }
    }

    return count;
  } else {
    return '\'\'';
  }
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
