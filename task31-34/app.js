//q no 1
// var myDate = new Date();  //constructor function kehte hain 
// document.write(myDate);

//q no 2

// const myMonth = ["jan", "feb", "mar", "apr", "may", "june", "july", "aug", "sept", "oct", "nov", "dec"];
// var currentMonth = new Date();

// alert("Current Month : " + myMonth[currentMonth.getMonth()] );

//q no 3   
var days = [
    "Sunday", "Monday", "Tuesday",
    "Wednesday", "Thursday", "Friday", "Saturday"
];

var today = new Date().getDay();

alert("Today is " + days[today].slice(0, 3));


 


//q no 4
// let mes = new Date();
// let day = mes.getDay();

// if(day === 0 || day === 6){
//     alert("Its a fun day")
// }
// else{
//     alert("Working day")
// }

//q no 5
// let myText = new Date();
// let dateNumber = myText.getDate();

// if(dateNumber < 16){
//     document.write("First fifteen days of the month")
// }
// else{
//     document.write("Last days of the month")
// }

//q no 6

let dateObj = new Date();
let miliSeconds = dateObj.getTime();

let minutes = miliSeconds / (1000 * 60);

document.write("<br> Elipsed minits Since January.1,1970"
    + miliSeconds
    );
    document.write(
    "<br>Elapsed minutes since January 1, 1970: "
    + minutes
);

//q no 7
var hours = new Date().getHours();

if (hours < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}



// Q8. Last Day of Last Month of 2020


var laterDate = new Date(2020, 11, 31);

document.write("<br>Later date: " + laterDate);



// Q9. Days Since 1st Ramadan 2015


var ramadanDate = new Date("June 18, 2015");

var currentDate2 = new Date();

var difference = currentDate2.getTime() - ramadanDate.getTime();

var daysPassed = Math.floor(
    difference / (1000 * 60 * 60 * 24)
);

document.write(
    "<br>" + daysPassed +
    " days have passed since 1st Ramadan, 2015"
);



// Q10


var referenceDate = new Date("December 5, 2015 22:50:16");

var beginningOf2015 = new Date("January 1, 2015 00:00:00");

var milliseconds = referenceDate - beginningOf2015;
var seconds = Math.floor(milliseconds / 1000);

document.write(
    "On reference date " +
    referenceDate +
    ", " +
    seconds +
    " seconds had passed since beginning of 2015."
);



// Q11


var currentDate = new Date();

var currentHours = currentDate.getHours();

var oneHourAgo = new Date(currentDate);
oneHourAgo.setHours(currentHours - 1);

document.write("<br><br>");
document.write("Current date: " + currentDate);
document.write("<br>1 hour ago, it was: " + oneHourAgo);



// Q12


var date100Years = new Date();

var currentDate12 = new Date(date100Years);

date100Years.setFullYear(date100Years.getFullYear() - 100);

alert(
    "Current date: " + currentDate12 +
    "\n100 years back, it was: " + date100Years
);



// Q13


var age = prompt("Enter your age:");

var currentYear = new Date().getFullYear();

var birthYear = currentYear - age;

document.write("<br><br>");
document.write("Your age is " + age);
document.write("<br>Your birth year is " + birthYear);



// Q14


var customerName = prompt("Enter Customer Name:");
var units = Number(prompt("Enter number of units:"));
var chargesPerUnit = Number(prompt("Enter charges per unit:"));

var currentMonth = new Date().toLocaleString("default", {
    month: "long"
});

var netAmount = units * chargesPerUnit;

// Late payment surcharge
var latePaymentSurcharge = 350;

var grossAmount = netAmount + latePaymentSurcharge;

document.write("<br><br>");
document.write("<h1>K-Electric Bill</h1>");

document.write("Customer Name: <b>" + customerName + "</b><br>");
document.write("Month: <b>" + currentMonth + "</b><br>");
document.write("Number of units: <b>" + units + "</b><br>");
document.write("Charges per unit: <b>" + chargesPerUnit + "</b><br><br>");

document.write(
    "Net Amount Payable (within Due Date): <b>" +
    netAmount.toFixed(2) +
    "</b><br>"
);

document.write(
    "Late Payment Surcharge: <b>" +
    latePaymentSurcharge.toFixed(2) +
    "</b><br>"
);

document.write(
    "Gross Amount Payable (after Due Date): <b>" +
    grossAmount.toFixed(2) +
    "</b>"
);