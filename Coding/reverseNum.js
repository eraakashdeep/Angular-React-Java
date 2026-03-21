function reverseNum(num){
return parseInt(num.toString().split('').reverse().join('') * Math.sign(num))
}
console.log(reverseNum(123809));