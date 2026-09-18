// question no 1
function showDateTime() {
    let now = new Date();
    document.write(now);
}
showDateTime();
// question no 2
function greetUser(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    alert("Hello, " + fullName + "!");
}
greetUser("John", "Doe");
// question no 3
function addNumbers() {
    let num1 = Number(prompt("Enter first number:"));
    let num2 = Number(prompt("Enter second number:"));
    return num1 + num2;
}
let result = addNumbers();
alert("Sum: " + result );
// question no 4
function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            result = "Invalid Operator";
    }

    document.write("Result: " + result + "<br>");
    return result;
}
calculator(10, 5, "+");
// question no 5
function square(num) {
    return num * num;
}

let final = square(5);
document.write("Square: " + final  + "<br>");
// question no 6
function factorial(num) {
    let answer = 1;
    
    for (let i = 1; i <= num; i++) {
        answer = answer * i;
    }
        return answer;
}
let total = factorial(5); 
document.write("Factorial: " + total + "<br>");
// question no 7
function displayCounting(start, end) {
    for (let i = start; i <= end; i++) {
        document.write(i + "<br>");
    }
}
displayCounting(1, 10);
// question no 8
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(val) {
        return val * val;
    }
    let baseSquare = calculateSquare(base);
    let perpSquare = calculateSquare(perpendicular);

    let hyp = Math.sqrt(baseSquare + perpSquare);

    document.write("Hypotenuse: " + hyp + "<br>");
    return hyp;
}
calculateHypotenuse(3, 4);
// question no 9
function calculateArea(width, height) {
    let area = width * height;
    return area;
}
let area1 = calculateArea(10, 5);
document.write("Area (values): " + area1 + "<br>");
let w = 8;
let h = 4;
let area2 = calculateArea(w, h);
document.write("Area (variables): " + area2 + "<br>");
// question no 10
function checkPalindrome(str) {
    let reversedStr = str.split("").reverse().join("");

    if (str === reversedStr) {
        document.write(str + " is a palindrome.<br>");
    } else {
        document.write(str + " is not a palindrome.<br>");
    }
}
checkPalindrome("madam");
checkPalindrome("hello");
// question no 11
function capitalizeWords(str) {
    let words = str.split(" ");
    let result = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
        result.push(capitalized);
    }
    return result.join(" ");
}

let output = capitalizeWords("the quick brown fox");
document.write("Output: " + output + "<br>");
// question no 12
function findLongestWord(str) {
    let words = str.split(" ");
    let longestWord = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}
let word = findLongestWord("Web Development Tutorial");
document.write("Longest Word: " + word + "<br>");
// question no 13
function countLetter(str, letter) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }

    return count;
}
let occurrences = countLetter("JSResourceS.com", "o");
document.write("Occurrences: " + occurrences + "<br>");
// question no 14
// 1. Circumference of Circle
function calcCircumference(radius) {
    let pi = 3.142;
    let circumference = 2 * pi * radius;
    document.write("The circumference is " + circumference + "<br>");
}

// 2. Area of Circle
function calcArea(radius) {
    let pi = 3.142;
    let area = pi * radius * radius;
    document.write("The area is " + area + "<br>");
}

// Example usage:
calcCircumference(10);
calcArea(10);