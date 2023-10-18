// //  tub sonlar kopaytmasi

// let number = +prompt('Son kiriting: ');
// let sum = 1;
// let i = 2;

// function tubNumber() {
//     while ( i <= number ){
//         for ( let j = 1; j <= number; j++){
//             if ( i%j == 0) {
//                 console.log(i);
//             }
//         }
//         i++;
//     }
// }
// console.log(tubNumber());

// poyezdga chipta

// let k = +prompt("K:");

// function ticket() {
//   if (k == 1 || k == 10) {
//     return "Vip 210K";
//   } else if (k >= 2 && k <= 7) {
//     return "Econom 105K";
//   } else if (k >= 8 && k <= 9) {
//     return "Business 140K";
//   } else {
//     console.log(" Pls TRY again");
//   }
// }

// console.log(ticket());

// Min and Max

// const arr = [22, 5, 10, 2, 55];


// function minMax() {
//   const sortedNumbers = arr.sort((a, b) => {
//     return a - b;
//   });

//   const min = sortedNumbers.slice(0, sortedNumbers.length - 1);
//   const max = sortedNumbers.slice(1);
//   let minCount = 0;
//   let maxCount = 0;
//   for (let i = 0; i < min.length; i++) {
//     minCount += min[i];
//   }

//   for (let i = 0; i < max.length; i++) {
//     maxCount += max[i];
//   }
//   console.log(minCount, maxCount);
// };

// minMax()



// floyd uchburchagi

// let rows = +prompt('Sonni kiriting: ');

// function triangleRows() {
//   let number = 1;

//   for (let i = 1; i <= rows; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//       row += number + '';
//       number++;
//     }
//     console.log(row);
//   }
// }

// // Usage
// triangleRows();
// // console.log(triangleRows());


// massivning juft elementlari kopaytmasi

// const arr = [];
//  let count = 1;
 
//  function JuftNumber() {
  
//  for (let i = 0; i <= 5; i++) {
//     const num = +prompt('Ixtiyoriy son kiriting: ');
//     arr.push(num);
//  }

//  for (let i =0; i <= arr.length; i++){
//    if (arr[i]%2 == 0) {
//     count *= arr[i];
//    }
//  }
//      return count;
//  }
//  console.log(JuftNumber());


//  5ga va 7 ga karrali bolmagan sonlar yigindisini topish


// const arr = []
// let count = 0;

// function numberCount() {

//   for (let i = 1; i <= 5; i++) {
//     const num = +prompt('Ixtiyoriy 5 ta raqam kiriting')
//     arr.push(num);
//   }
  
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 7 !== 0 && arr[i] % 5 !== 0) {
//       count += arr[i]
//     } 
//   }
//   return count;
// }

// console.log(numberCount());



// const arr = []
// let countNewArr = [];
// const a = +prompt('BBBB: ')

// function wordCount() {

//   for (let i = 1; i <= a; i++) {
//     const num = prompt(`Ixtiyoriy ${a} ta soz kiriting`)
//     arr.push(num);
//   }
  
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i].length);
//     if (arr[i].length == 7) {
//       countNewArr.push(arr[i])
//     } 
//   }

//   return countNewArr.length;
// }

// console.log(wordCount());



// Massivni ichida nechta 3 ning darajasi borligini aniqlash

// const arr = [];
// let powNumber = [];
// const a = +prompt('Sonlar sonini kiriting: ');

// function powNum() {
//   for ( let i = 1; i <= a; i++){
//     const num = +prompt(`${a} ta son kiriting: `);
//   }
// }


let a = +prompt('son kiriting: ');
let b, d, s;
let res;

if (a >= 100 && a < 1000) {
  b = a/100;
  c = a %10;
  d = a%100/10;

  if (b < d && d < c || b > d && d > c) {
    res = 'true';
  } else {
    res = 'False';
  }
} else {
  res = 'False';
}

console.log(res);