// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter222</h1>`;

import * as dateFns from 'date-fns';


console.log(dateFns.format(dateFns.startOfToday(),'MMMM yyyy'));


/*import { startOfToday,startOfMonth,endOfMonth,eachDayOfInterval,format } from 'date-fns';



let today = startOfToday();
console.log(format(today,'MMMM yyyy'));

let startMonth = startOfMonth(today);
console.log("start",startMonth);
let endMonth = endOfMonth(today);
console.log("end",endMonth);

let daysOfMonth = eachDayOfInterval({
  start:startMonth,
  end:endMonth
});
console.log("month",daysOfMonth);

$('#app').html('<button class="btn btn-danger">COUCOU</button>')*/