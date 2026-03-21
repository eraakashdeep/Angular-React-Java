function prime(n){
if(n<=1) return false;
for(let i=2;i<n;i++){
if(n % i === 0) return false;
}
return true;
}
console.log(prime(2));
console.log(prime(4));



//odd number

// function odd(n){
// return n%2 !== 0;
// }
// console.log(odd(1));
// console.log(odd(4));