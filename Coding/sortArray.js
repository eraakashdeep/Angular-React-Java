// 1. sort an array

let arr = [10,22,33,1,5];

arr.sort();
console.log(arr);


// 2. sort in ascending order
let arr1 = [10,22,33,1,5];
arr1.sort((a,b) => a-b);
console.log(arr1);

// 3. sort in ascending order
let arr2 = [10,22,33,1,5];
arr1.sort((a,b) => b-a);
console.log(arr2);

// 4. Sort strings

let arr3 = ["banana","apple","cherry"];
arr3.sort();
console.log(arr3);