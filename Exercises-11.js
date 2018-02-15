function changeMe(arr) {

  function display(number) {
    var result = (number + 1) + '. ' + data.firstName + ' ' + data.lastName + ':';
    console.log(result);
    console.log(data);
  }

  if (arr.length > 0) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length > 3) {
        var data = { firstName: arr[i][0], lastName: arr[i][1], gender: arr[i][2], age: 2017 - arr[i][3] };
      } else {
        var data = { firstName: arr[i][0], lastName: arr[i][1], gender: arr[i][2], age: 'Invalid Birth Year' };
      }
      display(i);
    }
  } else {
    console.log('""');
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);

// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
