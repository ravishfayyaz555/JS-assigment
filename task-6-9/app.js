// question # 1 start
// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:


var a = 10;

document.write("The value of a is: " + a);
document.write("<br>.........................<br><br>");

document.write("The value of ++a is: " + (++a));
document.write("<br>Now the value of a is: " + a);

document.write("<br><br>");

document.write("The value of a++ is: " + (a++));
document.write("<br>Now the value of a is: " + a);

document.write("<br><br>");

document.write("The value of --a is: " + (--a));
document.write("<br>Now the value of a is: " + a);

document.write("<br><br>");

document.write("The value of a-- is: " + (a--));
document.write("<br>Now the value of a is: " + a);

// question # 1 end



// question # 2 start
// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;


var a = 2, b = 1;

document.write("Initial Values:<br>");
document.write("a = " + a + "<br>");
document.write("b = " + b + "<br><br>");

document.write("Result after --a: " + (--a) + "<br>");
document.write("Value of a: " + a + "<br><br>");

a = 2;
b = 1;
document.write("Result after --a - --b: " + (--a - --b) + "<br>");
document.write("Value of a: " + a + "<br>");
document.write("Value of b: " + b + "<br><br>");

a = 2;
b = 1;
document.write("Result after --a - --b + ++b: " + (--a - --b + ++b) + "<br>");
document.write("Value of a: " + a + "<br>");
document.write("Value of b: " + b + "<br><br>");

a = 2;
b = 1;
var result = --a - --b + ++b + b--;

document.write("Result after --a - --b + ++b + b--: " + result + "<br><br>");

document.write("<b>Final Values:</b><br>");
document.write("a = " + a + "<br>");
document.write("b = " + b + "<br>");
document.write("result = " + result);
// question # 2 end



// question # 3 start
// 3. Write a program that takes input a name from user &
// greet the user.
var userName = prompt("Enter your name:");

document.write("<h2>Assalamu Alaikum " + userName + "! Welcome.</h2>");
// question # 3 end
// question # 5 start
// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
var num = prompt("Enter a number", "5");

if (num == "") {
    num = 5;
}

document.write("<h2>Multiplication Table of " + num + "</h2>");

document.write(num + " x 1 = " + (num * 1) + "<br>");
document.write(num + " x 2 = " + (num * 2) + "<br>");
document.write(num + " x 3 = " + (num * 3) + "<br>");
document.write(num + " x 4 = " + (num * 4) + "<br>");
document.write(num + " x 5 = " + (num * 5) + "<br>");
document.write(num + " x 6 = " + (num * 6) + "<br>");
document.write(num + " x 7 = " + (num * 7) + "<br>");
document.write(num + " x 8 = " + (num * 8) + "<br>");
document.write(num + " x 9 = " + (num * 9) + "<br>");
document.write(num + " x 10 = " + (num * 10) + "<br>");
// question # 5 end



// question # 6 start
// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.

// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

// Subject Names
var subject1 = prompt("Enter First Subject Name");
var subject2 = prompt("Enter Second Subject Name");
var subject3 = prompt("Enter Third Subject Name");

// Total Marks
var totalMarks = 100;

// Obtained Marks
var marks1 = +prompt("Enter Obtained Marks for " + subject1);
var marks2 = +prompt("Enter Obtained Marks for " + subject2);
var marks3 = +prompt("Enter Obtained Marks for " + subject3);

// Calculations
var totalObtained = marks1 + marks2 + marks3;
var grandTotal = totalMarks * 3;
var percentage = (totalObtained / grandTotal) * 100;

// Output
document.write("<table border='1' cellspacing='0' cellpadding='10'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");

document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td></tr>");

document.write("<tr><th>Total</th><th>" + grandTotal + "</th><th>" + totalObtained + "</th></tr>");
document.write("<tr><th colspan='3'>Percentage: " + percentage.toFixed(2) + "%</th></tr>");
document.write("</table>");

// question # 6 end