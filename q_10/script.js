// const multButton = document.getElementById('multiply');
// const divideButton = document.getElementById('divide');
// const firstNum = document.getElementById('firstNum')
// const secondNum = document.getElementById('secondNum') 



// function multiplyNum(first, second){
//     const sum = first * second;
//     return alert(sum);
// }

// function divideNum(first, second){
//     const sum = first/second;
//     return alert(sum);
// }

// multButton.addEventListener('click', multiplyNum)

// divideButton.addEventListener('click', divideNum)


const multButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const firstNum = document.getElementById('firstNum').value
const secondNum = document.getElementById('secondNum').value 



function multiplyNum(firstNum, secondNum){
    const sum = firstNum * secondNum;
    return alert(sum);
}

function divideNum(firstNum, secondNum){
    const sum = firstNum/secondNum
    return alert(sum);
}
multButton.addEventListener('click', multiplyNum)

divideButton.addEventListener('click', divideNum)