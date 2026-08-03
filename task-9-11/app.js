// q no 1
var cityName = prompt("Enter city name");
 if(cityName == "karachi"){
     alert("Welcome to city of light!")
 }
 else{
    alert("Not respond")
}
    // q no 2
 var gender = prompt("Enter your gender");
if(gender == "female"){
    alert("Good morning mam")
}
else{
    alert("Good morning sir")
}
// q no 3
var trafficLight = prompt("Enter color name");

if (trafficLight == "red") {
    document.write("Must Stop");
}
else if (trafficLight == "yellow") {
    document.write("Ready to move");
}
else if (trafficLight == "green") {
    document.write("Move now");
}
else {
    document.write("Invalid color");
}
// q no 4
var fuel = prompt("Enter remaining fuel in litres");

if (fuel < 0.25) {
    document.write("Please refill the fuel in your car");
}

// q no 5
// a
var a = 4;

if (++a === 5) {
    alert("given condition for variable a is true");
}

// b
var b = 82;

if (b++ === 83) {
    alert("given condition for variable b is true");
}

// c
var c = 12;

if (c++ === 13) {
    alert("condition 1 is true");
}

if (c === 13) {
    alert("condition 2 is true");
}

if (++c < 14) {
    alert("condition 3 is true");
}

if (c === 14) {
    alert("condition 4 is true");
}

// d
var materialCost = 20000;
var laborCost = 2000;

var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

// e
if (true) {
    alert("True");
}

if (false) {
    alert("False");
}

// f
if ("car" < "cat") {
    alert("car is smaller than cat");
}

// q no 6
var totalMarks = +prompt("Enter Total Marks");
var subject1 = +prompt("Enter Subject 1 Marks");
var subject2 = +prompt("Enter Subject 2 Marks");
var subject3 = +prompt("Enter Subject 3 Marks");

var obtainedMarks = subject1 + subject2 + subject3;
var percentage = (obtainedMarks / totalMarks) * 100;

document.write("<h1>Marks Sheet</h1>");

document.write("Total Marks : " + totalMarks + "<br>");
document.write("Marks Obtained : " + obtainedMarks + "<br>");
document.write("Percentage : " + percentage + "%<br>");

if (percentage >= 80) {
    document.write("Grade : A-one<br>");
    document.write("Remarks : Excellent");
}
else if (percentage >= 70) {
    document.write("Grade : A<br>");
    document.write("Remarks : Good");
}
else if (percentage >= 60) {
    document.write("Grade : B<br>");
    document.write("Remarks : You need to improve");
}
else {
    document.write("Grade : Fail<br>");
    document.write("Remarks : Sorry");
}

// q no 7
var secretNumber = 7;

var userNumber = +prompt("Guess the secret number");

if (userNumber == secretNumber) {
    alert("Bingo! Correct answer");
}
else if (userNumber + 1 == secretNumber) {
    alert("Close enough to the correct answer");
}

// q no 8

var number = +prompt("Enter a number");

if (number % 3 == 0) {
    document.write("The number is divisible by 3");
}

// q no 9
var number = +prompt("Enter a number");

if (number % 2 == 0) {
    document.write("Even Number");
}
else {
    document.write("Odd Number");
}

// q no 10
var temperature = +prompt("Enter Temperature");

if (temperature > 40) {
    document.write("It is too hot outside.");
}
else if (temperature > 30) {
    document.write("The Weather today is Normal.");
}
else if (temperature > 20) {
    document.write("Today's Weather is cool.");
}
else if (temperature > 10) {
    document.write("OMG! Today's weather is so Cool.");
}
else {
    document.write("It is very cold.");
}

// q no 11


var firstNumber = +prompt("Enter First Number");

var secondNumber = +prompt("Enter Second Number");

var operation = prompt("Enter Operation (+, -, *, /, %)");

if (operation == "+") {
    document.write(firstNumber + secondNumber);
}
else if (operation == "-") {
    document.write(firstNumber - secondNumber);
}
else if (operation == "*") {
    document.write(firstNumber * secondNumber);
}
else if (operation == "/") {
    document.write(firstNumber / secondNumber);
}
else if (operation == "%") {
    document.write(firstNumber % secondNumber);
}
else {
    document.write("Invalid Operation");
}