//Gonna have to use math.random
//need to use input

var input = prompt("Guess a number between 1-10")

function randomNumber(theInput){
    var number = Math.floor((Math.random() * 10) + 1);

    if(theInput == number){
        return console.log("You guessed right!")
    }
    else{
        return console.log("Guess again :/")
    }
}

randomNumber(input);