// q no 1
var students = [];

//q no 2
var students ={};

//q no 3
var fruits = ["apple","orange","banana","grapes","watermilon"];

//q no 4

var nums = [1,2,3,4,5];

//q no 5
var bool = [true,false];

//q no 6
 var mixWords = ["apple", true, 12, false];

 var qualifications = ["SSC","Hsc","Bcs","Bs","Bcom","Ms","M.fill","Phd"];
 document.write("<ol>");
for(var i = 0; i < qualifications.length; i++){
 document.write("<li>" + qualifications[i] + "</li>");
}

// q no 7
var students = ["john","tony","mical"]
var score = [320,230,480];

var percentage1 = score[0]/ 500 * 100;
var percentage2 = score[1]/500 * 100;
var percentage3 = score[2]/500 *100;

document.write("score of " + students[0] + "is" + score[0] + ".percentage :" + percentage1 + "%<br>");
document.write("score of " + students[1] + "is" + score[1] + ".percentage :" + percentage2 + "%<br>");
document.write("scor of " + students[2] + "is" + score[2] + ".percentage :" + percentage3 + "%");

// q no 8
var colors = ["Red", "Green", "Blue"];

document.write("Original Array: " + colors + "<br><br>");

// a. Beginning mein color add
var color1 = prompt("Beginning mein konsa color add karna hai?");
colors.unshift(color1);
document.write("After adding at beginning: " + colors + "<br><br>");

// b. End mein color add
var color2 = prompt("End mein konsa color add karna hai?");
colors.push(color2);
document.write("After adding at end: " + colors + "<br><br>");

// c. Beginning mein 2 colors add
colors.unshift("Pink", "White");
document.write("After adding two colors: " + colors + "<br><br>");

// d. First color delete
colors.shift();
document.write("After deleting first color: " + colors + "<br><br>");

// e. Last color delete
colors.pop();
document.write("After deleting last color: " + colors + "<br><br>");

// f. Specific index par color add
var index = Number(prompt("Kis index par color add karna hai?"));
var color3 = prompt("Konsa color add karna hai?");

colors.splice(index, 0, color3);
document.write("After adding at desired index: " + colors + "<br><br>");

// g. Specific index se colors delete
var deleteIndex = Number(prompt("Kis index se color delete karna hai?"));
var deleteCount = Number(prompt("Kitne colors delete karne hain?"));

colors.splice(deleteIndex, deleteCount);
document.write("Final Array: " + colors);

//q no 10
var scores = [320, 230, 480, 120];

document.write("Scores of Students: " + scores + "<br>");

scores.sort();

document.write("Ordered Scores of Students: " + scores);

//q no 11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

var selectedCities = cities.slice(0, 3);

document.write("Cities list: " + cities + "<br><br>");
document.write("Selected cities list: " + selectedCities);

//q no 12





//q no 13
var queue = [];

queue.push("Ali");
queue.push("Ahmed");
queue.push("Sara");

document.write("Queue: " + queue + "<br>");

document.write("First value: " + queue.shift() + "<br>");
document.write("Second value: " + queue.shift() + "<br>");
document.write("Third value: " + queue.shift());