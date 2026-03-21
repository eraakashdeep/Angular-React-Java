function anagram(str1,str2){
let s1 = str1.toLowerCase().split('').sort().join('');
let s2 = str2.toLowerCase().split('').sort().join('');
return s1 === s2

// //special char and ignore space
//  let format = str =>
//     str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');

//   return format(str1) === format(str2);

}
console.log(anagram("Listen","Silent"));
