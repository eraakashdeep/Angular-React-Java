function fibonacci(n){
let series = [0,1];
for(let i=2;i<n;i++){
series[i] = series[i-1] + series[i-2];
}
return series;
}
console.log(fibonacci(9));


// //using recursion

// function fibonacci(n){
// if(n <= 1) return n;
// return fibonacci(n-1) + fibonacci(n-2);
// }
// console.log(fibonacci(6));