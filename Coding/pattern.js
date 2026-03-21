// // 1. right triangle pattern
// function pattern(n){
// for(let i=1;i<=n;i++){
// console.log('*'.repeat(i));
// }
// }
// pattern(4);

// // 2. inverted triangle pattern
// function pattern(n){
// for(let i=n;i>=1;i--){
// console.log('*'.repeat(i));
// }
// }
// pattern(4);

// // 3. pyramid pattern
// function pattern(n){
// for (let i=1;i<=n;i++){
//     let space = ' '.repeat(n-i);
//     let star = '*'.repeat(2*i-1);
//     console.log(space + star);
// }
// }
// pattern(4);


// // 4. number triangle pattern
// function pattern(n){
// for (let i=1;i<=n;i++){
// let row = '';
// for (let j=1;j<=i;j++){
//     row += j;
// }
// console.log(row);
// }
// }
// pattern(4);

// 5. floyd's triangle pattern
function pattern(n){
let num = 1;
for (let i=1;i<=n;i++){
let row = '';
for (let j=1;j<=i;j++){
    row += num + ' ';
    num++;
}
console.log(row);
}
}
pattern(4);


// // 6. diamond pattern
// function pattern(n){
// for (let i=1;i<=n;i++){
//     let space = ' '.repeat(n-i);
//     let star = '*'.repeat(2*i-1);
//     console.log(space + star);
// }
// for (let i=n-1;i>=1;i--){
//      let space = ' '.repeat(n-i);
//     let star = '*'.repeat(2*i-1);
//     console.log(space + star);
// }
// }
// pattern(4);

