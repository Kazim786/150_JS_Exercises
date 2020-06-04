function currentDate(){
    var listOfDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var d = new Date ()

    // var day = listOfDays[d.getDay()]

    var day = d.getDate()

    var month = d.getMonth()

    var year = d.getFullYear()

    var fullDate = month + '/' + day + '/' + year;

    return fullDate
}

console.log(currentDate())