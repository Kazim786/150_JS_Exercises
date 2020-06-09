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
const firstNum = document.getElementById('firstNum')
const secondNum = document.getElementById('secondNum') 



function multiplyNum(){
    const sum = firstNum.value * secondNum.value;
    return alert(sum);
}

function divideNum(){
    const sum = firstNum.value/secondNum.value;
    return alert(sum);
}
multButton.addEventListener('click', multiplyNum)

divideButton.addEventListener('click', divideNum)