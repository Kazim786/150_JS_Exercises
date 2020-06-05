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
        const leftDays = ((11 - month) * 30.42) + 25 - day ;


        console.log(`These are the number of days left until Christmas ${leftDays}`)
    }
}

daysLeft()

