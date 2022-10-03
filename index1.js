
// let map = new Map();

// map.set("name", "John");
//  let keys =Array.from(map.keys());

//   keys.push("more");
 

// // Помилка: keys.push -- це не функція

// console.log(keys);

// function unique(arr) {
//   return Array.from(new Set(arr));
// }
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// console.log(unique(values))


//let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

//  const wd = new Set()
//  const out = []
// for (const word of arr) {
//  let worde = word.toLowerCase()
//  let x = 0;
//   for (let i = 0; i < worde.length; i++) {
//     x +=worde[i].charCodeAt();
// }
  
//   if(wd.size - wd.add(x).size) { 
//    out.push(word)
//   }
//  }
//  console.log(out)
// let arrU = new Set(arr)
//console.log('adsfadsf'.charCodeAt(2));

// console.log((arrU) );

// function aclean(arr) {
//   let obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     let sorted = arr[i].toLowerCase().split("").sort().join("");
//     obj[sorted] = arr[i];
//   }

//   return Object.values(obj);
// }

// let arrt = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log( aclean(arrt) );

// console.table(moveZeros([ 9, 0, 0, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0 ]))
//  function moveZeros(arr) {
//   return [...arr.filter(x => x !== 0), ...arr.filter(y => y === 0)];
 //  for (let i = arr.length - 1;i >= 0; i--) {
//   console.log(i)
//     if(arr[i] === 0) {
//     arr.splice(i, 1);
//      arr.push(0);
//     }
//   }
//   return arr
// } 

// const arr = [9, 0, 0, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0];

//const arr = [1,2,2,3,3,3,4,3,3,4,4,3,2,2,1];
//const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
// const findOdd = A => A.filter(x => A.filter(v => x === v).length % 2 === 1).find(a => a);
// console.log(findOdd(arr))
// function findOdd(A){
//   for (const item of A) {
//     const odd = arr.filter((x) => x == item);
//     if(odd.length % 2 !== 0) {
//       return odd[0];
//     } 
//   }  
// }

// function findOdd(arr) {
  
//   return arr.find(item => arr.filter(el => el == item).length % 2)
// }

// const arr = [160, 3, 1719, 19, 11, 13, -21];
// const arr1 = [2, 4, 0, 100, 4, 11, 2602, 36];

// console.log(findOutlier(arr1))
 

//   function findOutlier(integers){
//     const odd = integers.filter(x => x % 2 !==0);
//     const even = integers.filter(y => y % 2 === 0);
//     return (odd.length > even.length) ? even[0]: odd[0];

//   }
// const words = "is2 Thi1s T4est 3a"
// //const words = ""
// function order(words){
//   if(words == '') {
//     return '';
//   }
// const arr = words.split(' ');
// const obj = new Map();

//  arr.map((x,i) => obj.set(words.match(/\d/g)[i], arr[i]));
//  return (Array.from(obj).sort()).map(x => x[1]).join(' ');
// }
 //console.log(order(words))
//  function order(words) {
//  return words.split(" ").sort((a, b) =>(a.replace(/[^\d]/g, "")) - b.replace(/[^\d]/g, "")).join(" ")
//   //console.log(a.replace(/[^\d]/g, ""))
// }


// function score( dice ) {
//   let len = 0;
//   let len2 = 0;
//   let len3 = 0;
//   let len4 = 0;
//   let len5 = 0;
//   let len6 = 0;
 
//   dice.map(x => x== 5 ? len5 +=1: len5 =len5 );
//   dice.map(x => x== 1 ? len +=1: len =len );
//   dice.map(x => x== 2 ? len2 +=1: len2 =len2 );
//   dice.map(x => x== 3 ? len3 +=1: len3 =len3 );
//   dice.map(x => x== 4 ? len4 +=1: len4 =len4 );
//   dice.map(x => x== 6 ? len6 +=1: len6 =len6 );

//   let score = 0;
//   if(len == 5) {score += 1200};
//   if(len == 4) {score += 1100};
//   if(len == 3) {score += 1000};
//   if(len == 2) {score += 200};
//   if(len == 1) {score += 100};
//   if(len5 == 5) {score += 600};
//   if(len5 == 4) {score += 550};
//   if(len5 == 3) {score += 500};
//   if(len5 == 2) {score += 100};
//   if(len5 == 1) {score += 50};
//   if(len4 >= 3) {score += 400};
//   if(len3 >= 3) {score += 300};
//   if(len2 >= 3) {score += 200};
//   if(len6 >= 3) {score += 600};

//   return score;
// }

// let score=(a,b={111:10,1:1,5:.5})=>(a.sort().join``
// .match(/(\d)\1{2}|[15]/g)||[])
// .reduce((c,d)=>c+(b[d]||d[0])*1e2,0)
// console.log(score( [2, 3, 4, 6, 4] ));
// console.log('1 4 4 4 2'.match((/(\d)1{2}|[15]/g)||[]))
// console.log('1 4 4 4 2'.match(/(([1-6])\2\2)|(1|5)/g))

// function score( dice ) {
//   var v = {
//     111: 1000,
//     222: 200,
//     333: 300,
//     444: 400,
//     555: 500,
//     666: 600,
//     1: 100,
//     5: 50
//   };
  
//   var s = dice.sort().join('').match(/(([1-6])\2\2)|(1|5)/g) || [];
//   return s.reduce(function (a, e) {
//     return a + v[e];
//   }, 0);
// }
// console.log(fibonacci(27))
// function fibonacci(n) {
  // if (n < 2)
  //   return n;
  //   let b = 1,c = 1,a = 1
  //   for (let i = 3; i <= n; i++) {
  //     c = a + b;
  //     a = b;
  //     b = c;
  //   }
  //   return  c;
//}
// function fibonacci(n) {
//   if (n < 2)  
//   return n;
  
//   const arr = [0, 1,1,2];
//   for (let i = 3; i < n; i++) {
//     arr[i+1] = arr[i] + arr[i-1];
//   }
//   return arr[n - 1] + arr[n - 2];
// }

// const txt = 'In a village of La Mancha, the name of which I have no desire to call to\
// mind, there lived not long since one of those gentlemen that keep a lance\
// in the lance-rack, an old buckler, a lean hack, and a greyhound for\
// coursing. An olla of rather more beef than mutton, a salad on most\
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra\
// on Sundays, made away with three-quarters of his income.'

// const arr = txt.toLowerCase().split(' ').sort();
// let tot3 = [];
// for (let i = 0; i < arr.length; i++) {
//  tot3[i] = arr.filter(x => x== arr[i]);
//  if(tot3[i].length < tot3[i].length) {arr.pop(arr[i])}
//  console.log(tot3[i])
// }
// console.log(tot3)

