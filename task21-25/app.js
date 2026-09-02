//q no 1
//var fName = prompt("Enter your first name");
//console.log(fName);

//var lName = prompt("Enter your last name");
//console.log(lName);

//var fullName = fName + lName ;
//console.log(fullName);

//q no 2
//var userInput = prompt("Favorite mobile phone model");
//console.log("My Favorite mobile phone model is " + userInput.length);

//Q NO 3
// var nationality = "Pakistani";
// console.log("string : Pakistani");
// console.log( "Last indexOf 'n' is "+ nationality.indexOf("n"));

//q no 4 
//var sentence = "Hello world";
//console.log("String:",sentence);
//console.log(<br/>);
//console.log("Last index of 'l':",sentence.lastIndexOf("l"));

//q no 5
// var sentence = "Hello world";
// var character = sentence.charAt(3);
// console.log("String: " ,sentence );
// console.log("character at index 3:", character);

//q no 6
var fName = "Ravish";
var lName = "Fayyaz";
console.log("My Ffirst name is: " + fName + " My lastname is : " + " " + lName );

//q no 7
var city = "Hyderabad";
var result = city.replace("Hyder" , "Islam");

document.write("city: " + city + "<br>");
document.write("After replacement: " +result);

//q no 8
var university = "University of karachi";
var result = university.search("and");

document.write("string: " + university + "<br>");
document.write("Indexof 'and' : " + result);

//q no 9
var userInput = prompt("Enter any word");
var result = userInput.toUpperCase();

document.write("user input: " + userInput + "<br>");
document.write("UpperCase: " + result);

//q no 10
// Qustion No 10
let userInput = prompt("Enter any text:");
let upperCaseInput = userInput.toUpperCase();
document.write("User input: " + userInput + "<br>");
document.write("Upper case: " + upperCaseInput  + "<br>");
// Qustion No 11
let UserInput = prompt("Enter any text:");
let titleCaseInput = userInput.charAt(0).toUpperCase() + UserInput.slice(1).toLowerCase();
document.write("User input: " + UserInput + "<br>");
document.write("Title case: " + titleCaseInput +"<br>") ;
// Qustion No 12
var num = 35.36;
var StrNum = num.toString().replace(".", "");
document.write("Number: " + num + "<br>");
document.write("Result: " + StrNum);
// Qustion No 13
let username = prompt("Enter your username:");
let isValid = true;
for (let i = 0; i < username.length; i++) {
    let charCode = username.charCodeAt(i);
    if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
        isValid = false;
        break;
    }
}
if (!isValid) {
    alert("Please enter a valid username!");
} else {
    alert("Username saved: " + username);
}
// Qustion No 14
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let Input = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
let searchItem = Input.toLowerCase();

let isFound = false;
let itemIndex = -1;
for (let i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === searchItem) {
        isFound = true;
        itemIndex = i;
        break;
    }
}
if (isFound) {
    document.write(userInput + " is <b>available</b> at index " + itemIndex + " in our bakery");
} else {
    document.write("We are sorry. " + Input + " is <b>not available</b> in our bakery");
}

let password = prompt("Enter your password:");
// Qustion No 15
let hasAlphabet = false;
let hasNumber = false;
if (password.length < 6) {
    document.write("Entered password: " + password + "<br>");
    document.write("Password must be at least 6 characters long. Please enter a valid password.");
} 
else if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
    document.write("Entered password: " + password + "<br>");
    document.write("Password can not begin with a number. Please enter a valid password.");
} 
else {
    for (let i = 0; i < password.length; i++) {
        let code = password.charCodeAt(i);
        if (code >= 48 && code <= 57) {
            hasNumber = true;
        } 
        else if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            hasAlphabet = true;
        }
    }
    if (hasAlphabet && hasNumber) {
        document.write("Entered password: " + password + "<br>");
        document.write("Password is valid!");
    } else {
        document.write("Entered password: " + password + "<br>");
        document.write("Password must contain both alphabets and numbers. Please enter a valid password.");
    }
}
// Qustion No 16
var university = "University of Karachi";
var uniArray = university.split("");
for (var i = 0; i < uniArray.length; i++) {
    document.write(uniArray[i] + "<br>");
}
// Qustion No 17
var work = prompt("Enter any text:");
var lastChar = work.charAt(work.length - 1);
document.write("User input: " + work + "<br>");
document.write("Last character of input: " + lastChar);
// Qustion No 18
var text = "The quick brown fox jumps over the lazy dog";
var words = text.toLowerCase().split(" ");
var count = 0;
for (let i = 0; i < words.length; i++) {
    if (words[i] === "the") {
        count++;
    }
}
document.write("Text: " + text + "<br>");
document.write("There are " + count + " occurrence(s) of word 'the'");