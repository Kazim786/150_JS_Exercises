var d = new Date();

var year = d.getFullYear()

// console.log(2020 % 4)
function leapYear (theYear){
    if(theYear % 4 == 0 && theYear % 100 == 0 && theYear % 400 == 0){
        
    }
    return console.log(theYear)
}
alert(leapYear(year));