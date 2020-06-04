var d = new Date()
const time = d.getMinutes();
let hour = d.getHours();
var dayList = ["Sunday" , 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


if(hour >= 12){
  hour = hour - 12


alert("Today is: " + dayList[d.getDay()] + " " + hour + ":" + time + " pm");
}
var body = document.querySelector('body');

var div = document.createElement('div');

div.innerHTML = "Helloo";


div.style.backgroundColor = 'Green';

document.body.appendChild(div);

var button = document.querySelector('button');

button.addEventListener('click', function(){
  window.print()
})