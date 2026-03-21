 let str = "aakash deep";
//let str = 1234555;
function countALlCharacter(str){
    let count = {};
    // let num = str.toString(); // convert number to string
//     for(let char of num){
     for(let char of str){
        count[char] = (count[char] || 0) + 1;
    }
return count;
}
console.log(countALlCharacter(str));

// //single character count
// function countALlCharacter(str, target){
// let count = 0;
// for(let char of str){
// if(char === target) count++;
// }
// return count;
// }
// console.log(countALlCharacter(str,'a'));