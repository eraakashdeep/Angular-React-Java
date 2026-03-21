function plaindrome(str){
let reversed = str.split('').reverse().join('');
return str === reversed;
}
console.log(plaindrome("madam"));
console.log(plaindrome("hmadamgh"));

// function plaindrome(str){
// let reversed = parseInt(str.toString().split('').reverse().join('') * Math.sign(str));
// return str === reversed;
// }
// console.log(plaindrome(121));
// console.log(plaindrome(1211));