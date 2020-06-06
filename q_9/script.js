var d = new Date(2020, 11, 25)



function daysLeft(){
    var d = new Date(2020, 11, 25)
    var year = new Date();
    year = year.getFullYear()
    var day = new Date()
    day = day.getDate()
    var month = new Date()
    month = month.getMonth();

    var today = month + '/' + day;

    if(today !== "11/25"){
        const leftDays = ((11 - month) * 30.42) + 25 - day;

        alert(`These are the number of days left until Christmas ${leftDays}`);
    }
}

// daysLeft()

var button = document.createElement('button')

button.innerText = "Click to find out When Christmas is!"

button.style.color = "red"


button.addEventListener("click", daysLeft)

var body = document.querySelector('body');

body.appendChild(button);


