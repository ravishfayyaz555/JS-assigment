// question no 1

var num1 = 3 ;
var num2 = 5 ;
var total = num1 + num2;
document.write("Sum of 3 and 5 is ");
document.write(total);

// question no 2

var num1 = 3 ;
var num2 = 5 ;
var total = num1 - num2;
document.write("Subtraction of 3 and 5 is <br/>");
document.write(total);

var num1 = 3 ;
var num2 = 5 ;
var total = num1 * num2;
document.write("Multiply of 3 and 5 is <br/>");
document.write(total);

var num1 = 3 ;
var num2 = 5 ;
var total = num1 / num2;
document.write("devision of 3 and 5 is <br/> ");
document.write(total);

var num1 = 3 ;
var num2 = 5 ;
var total = num1 % num2;
document.write("modulus of 3 and 5 is <br/> ");
document.write(total);
document.write("<br/>");

// question no 3

var myVari
var myVari = "Value after variablr declearation is:?? ";
document.write(myVari);
document.write("<br/>");
var myVari = 5 ;
document.write("Initial valur: " + myVari);
document.write("<br/>");
 myVari++ ; //increment keya hai 
 document.write(myVari);
 document.write("<br/>");

document.write("Increment the variable " ,myVari);
document.write("<br/>");

myVari = myVari + 7 ;
document.write("Value after adding is : ",myVari, "<br/>");

myVari = --myVari ;
document.write(myVari, "<br/>");

document.write("Value after decrement is :", myVari);

document.write("<br/>");
document.write("Output : The reminder is :",+ (myVari % 3));
document.write("<br/>");

var newPart ;
document.write(newPart);
document.write("<br/>");
document.write("Value after declearation variable is :",newPart);
document.write("<br/>");
document.write("Initial value is :5");
document.write("<br/>");
document.write("Value after increment is : 6");
document.write("<br/>");
document.write("Value after addition is : 13");
document.write("<br/>");
document.write("Value after decrement is: 12");
document.write("<br/>");
document.write("The reminder is : 0");
document.write("<br/>");
// question no 4

var movieTicket = 600;

document.write(movieTicket*5);
document.write("<br/>");
document.write("Total cost of buy tickets to movie tickets: ", movieTicket," PKR");
document.write("<br/>");

// question no 5

// var table = 4;
document.write("Table of 4", "<br/>");
var num = 4;
document.write(num + "x1=" + num*1 , "<br/>");
document.write(num + "x2=" + num*2 , "<br/>");
document.write(num + "x3=" + num*3 ,"<br/>");
document.write(num + "x4=" + num*4 , "<br/>");
document.write(num + "x5=" + num*5 ,"<br/>");
document.write(num + "x6=", + num*6 ,"<br/>");
document.write(num + "x7=", + num*7, "<br/>");
document.write(num + "x8=", + num*8, "<br/>");
document.write(num + "x9=", + num*9, "<br/>");
document.write(num + "x10=", + num*10, "<br/>");

document.write("<br/>");
// question no 6
//smjhna hai

var celsius = 25;


var fahrenheit = (celsius * 9 / 5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F");

var fahr = 70;

var cels = (fahr - 32) * 5 / 9;
document.write("<br>" + fahr + "°F is " + cels + "°C");

// question no 7 pratice
document.write("<br/><br/>");
document.write("Shopping Cart");
var priceOfItem_1 = 650;
var quantityOfItem_1 = 3;
var priceOfItem_2 = 100;
var quantityOfItem_2 = 7;
var shipping_charges = 100;
var totalItemOne = priceOfItem_1 * quantityOfItem_1;     //650*3=1950
var totalItemTwo = priceOfItem_2 * quantityOfItem_2;     //100*7=700
var totalCost = totalItemOne + totalItemTwo + shipping_charges;   //1950+700+100=2750
document.write("<br/>");
     document.write("Price of Item one : ", priceOfItem_1,"<br/><br");
     document.write("Quantity of Item one :" ,quantityOfItem_1,"<br/>");
     document.write("Price Of Item Two:", priceOfItem_2, "<br/>");
     document.write("Quantity Of Item Two :", quantityOfItem_2, "<br/>");
     document.write("Shipping Charges Of :", shipping_charges, "<br/><br/>");
     document.write("Total Cost Of Your Order Is:",totalCost,"<br/>");

// question no 8
var totalMarks = 980;
var obtainsMarks = 804;
document.write("Total marks :" ,totalMarks ,"<br/>");
document.write("Obtains marks :", obtainsMarks , "<br/>");
document.write("Percentage :" + (804/980)*100,"%");

// question no 9


var usd = 10;
var sar = 25;


var usdRate = 277.808;      // 1 USD = 277.808 PKR
var sarRate = 74.0352;      // 1 SAR = 74.0352 PKR


var totalPKR = (usd * usdRate) + (sar * sarRate);

document.write("<br/>");
document.write("Currency in PKR");
document.write("<br/>");
document.write("Total Currency in PKR: ", + totalPKR);

// q no 10

var num = 10;

var result = ((num + 5) * 10) / 2;
document.write("<br/>");

document.write("Final Result: " + result);

// q no 11

var currentYear = 2025;
var birthYear = 2002;

var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("<h1>Age Calculator</h1>");

document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("They are either " + age2 + " or " + age1 + " years old.");

// q n0 12


var radius = 20;

var circumference = 2 * Math.PI * radius;
var area = 3.142 * radius * radius;

document.write("<h1>The Geometrizer</h1>");

document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area);

// q no 13

var favoriteSnack = "Chips";
var currentAge = 20;
var maximumAge = 80;
var snackPerDay = 2;

var remainingYears = maximumAge - currentAge;

var totalSnacks = remainingYears * 365 * snackPerDay;

document.write("<h1>Lifetime Supply Calculator</h1>");

document.write("Favorite Snack: " + favoriteSnack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maximumAge + "<br>");
document.write("Amount of snacks per day: " + snackPerDay + "<br><br>");

document.write("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".");