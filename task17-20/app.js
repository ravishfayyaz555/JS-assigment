// Question 1

// var arr =[[]];

// Question 2

// var arr = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ]

// Question 3

// for(var i = 1; i <= 10; i++){
//     document.write(i + "<br/>");
// }

// Question 4

// var num =+prompt("Enter a number to show its multiplication table");
// var lenght =+prompt("Enter length of multiplication table");

//  document.write("<h1>Multiplication table of " + num + "</h1>");

// for(var i = 1; i <= lenght; i++){
//     document.write(num + " x" + i + "=" + // Question);
// }

// Question 5

// var fruits = ["apple","banana","mango","orange","strawberry"];

// for(var i = 0; i < fruits.length ; i++){
//     document.write(fruits[i] + "<br/>")

// }

// document.write("<br/>")

// for(var i = 0; i < fruits.length ; i++){

//     document.write( "Elements at index " + i + " is " + fruits[i] + "<br/>")

// }


// Question 6 

// (a)
// for(var i = 1; i <= 15; i++){
//     document.write(i + ", ");
// }

// (b)

// for(var i = 10; i >= 1; i--){
//     document.write(i + " , ");
// }

// (c)

// for(var i = 1; i <= 20; i++){
//     if(i % 2 == 0){
//         document.write(i + ", ")
//     }
// }


// (d)

// for(var i = 1; i <= 20; i++){
//     if(i % 2 != 0){
//         document.write(i + ", ")
//     }
// }

// (e)

// for(var i = 1; i <= 20; i++){
//     if(i % 2 == 0){
//         document.write(i + "k, ")
//     }
// }

// Question 7

// var bakery =["cake","apple pie","cookie","chips","patties"]

// var search = prompt("What do you want Sir/Maam")

// var found = false 

// for(var i = 0; i < bakery.length; i++){
//     if(bakery[i] === search){
//         found = true
//         break;
//     }
// }

// if(found){
//     document.write(search + " is available at index " + i + " in our bakery")
// }
// else{
//     document.write("we are sorry " + search  + " in our bakery")
// }

// Question 8

// var num = [24, 53, 78, 91, 12];

// var largest = num[0];

// for (var i = 1; i < num.length; i++) {
//     if (num[i] > largest) {
//         largest = num[i];
//     }
// }
// document.write("Array items: " + num + "<br/><br/>")
// document.write("The largest number is: " + largest);

// Question 9

// var num = [24, 53, 78, 91, 12];

// var smallest = num[0];

// for (var i = 1; i < num.length; i++) {
//     if (num[i] < smallest) {
//         smallest = num[i];
//     }
// }
// document.write("Array items: " + num + "<br/><br/>")
// document.write("The  smallest number is: " + smallest);

// Question 10 

// for(var i = 1; i <= 100; i++){
//  if(i % 5 == 0){
//     document.write(i + ", ");
//  }
// }