// var year; 

// var d = new Date();

// var n = d.getDay();

// var m = d.getMonth()

// for (year = 2014; year <= 2050; year++){
//     if(n == 0 && m == 0 && year == 2014 || year >= 2050){
//         console.log("January 1st fell on sunday")
//     }
// }

// if(n == 0 && m == 0 && year == 2014 || year <= 2050){
//     console.log(`January 1st fell on sunday + ${year}`)
// }else{
//     console.log("its not")
//   }

//Above is the work i did

//Below is the solution

console.log('--------------------');
for (let year = 2014; year <= 2050; year++)
    {
    const d = new Date(year, 0, 1);
    if ( d.getDay() === 0 )
        console.log(`1st January is being a Sunday  ${year}`);
    }
console.log('--------------------');