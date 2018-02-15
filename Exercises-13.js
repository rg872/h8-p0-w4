function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  var result = [];

  function counting(index, shop, list) {
    var buyers = [];
    var profit = list[index][1];
    var left = list[index][2];
    for (var i = 0; i < shop.length; i++) {
      if (list[index][0] === shop[i].product && left - shop[i].amount >= 0) {
        buyers.push(shop[i].name);
        left = left - shop[i].amount;
      }
    }

    if (buyers.length > 0) {
      profit = profit * (list[index][2] - left);
    } else {
      profit = 0;
    }

    return [buyers, left, profit];
  }

  if (typeof shoppers !== 'undefined' && shoppers !== null && shoppers.length !== null && shoppers.length > 0) {
    for (var i = 0; i < listBarang.length; i++) {
      result.push({ product: listBarang[i][0], shoppers: counting(i, shoppers, listBarang)[0],
        leftOver: counting(i, shoppers, listBarang)[1], totalProfit: counting(i, shoppers, listBarang)[2] });
    }
  }

  return result;
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2},
{name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3},
{name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8},
{name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10},
{name: 'Rani', product: 'Sweater Uniklooh', amount: 1},
{name: 'Devi', product: 'Baju Zoro', amount: 1},
{name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
