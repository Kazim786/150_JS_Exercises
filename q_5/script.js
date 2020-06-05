// const sstring = 'w3resource';

// console.log(sstring.substring(1, 3))

var word = document.getElementById('target');

// console.log(word.innerText)

// console.log(word.innerText.substring(10, 0))

// var theSplit = word.split(",");

// console.log(theSplit)

var arr = Array.from(word.innerText);
// conssdfsole.log(arr)
var newArr = []

function rearrangement(arr1, arr2){
    for(var i = 9; i < arr1.length; i--){
        arr2.unshift(arr1.pop(i))
        
    }
    return arr2
}

console.log(rearrangement(arr, newArr))

// var test = [1, 2, 3, 4]
// var newArr = []
// console.log(test.pop())

// for(let i = 0; i < test.length; i++){

// }

