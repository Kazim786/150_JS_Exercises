var word = document.getElementById('target');
var arr = Array.from(word.innerText);
console.log(arr)
// var newArr = []

// function rearrangement(arr1, arr2)
// {
//     for(var i = 9; i < arr1.length; i--)
//         arr2.unshift(arr1.pop(i))

//     return arr2
// }

// console.log(rearrangement(arr, newArr))

console.log(arr.reverse())