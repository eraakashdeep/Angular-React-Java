function secondLargest(ln){
let unique = [...new Set(ln)]; // remove duplicate
unique.sort((a,b) => b-a);  // desending
return unique[1];
// return unique[2]; // 3rd largest
// return unique[0]; //largest
}
console.log(secondLargest([10,11,1222,1111,222,1,2,1,2,1,33,44,33,44]));