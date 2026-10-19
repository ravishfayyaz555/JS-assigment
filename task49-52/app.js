
// QUESTION 1

// i. 
var mainContent = document.getElementById("main-content");

console.log(mainContent);

// ii.
console.log(mainContent.children);

// iii. 

var renderElements = document.getElementsByClassName("render");

for (var i = 0; i < renderElements.length; i++) {
    console.log(renderElements[i].innerHTML);
}

// iv. 
document.getElementById("first-name").value = "Alex";


// v. 
document.getElementById("last-name").value = "Bank";

document.getElementById("email").value = "alexbank@example.com";

// QUESTION 2

// i.

var formContent = document.getElementById("form-content");

console.log(formContent.nodeType);

// ii. 

var lastName = document.getElementById("lastName");

console.log(lastName.nodeType);
console.log(lastName.childNodes);

// iii.

lastName.firstChild.nodeValue = "Last Name: Smith";

// iv. 

console.log(mainContent.firstElementChild);

console.log(mainContent.lastElementChild);

// v. 

console.log(lastName.previousElementSibling);

console.log(lastName.nextElementSibling);

// vi. 

var email = document.getElementById("email");

console.log(email.parentNode);

console.log(email.parentNode.nodeType);


// ======================================
// QUESTION 1
// ======================================

var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" }
];

var totalPrice = 0;

for (var i = 0; i < itemsArray.length; i++) {

    var itemTotal =
        Number(itemsArray[i].price) *
        Number(itemsArray[i].quantity);

    console.log(
        itemsArray[i].name + " total price = " + itemTotal
    );

    totalPrice = totalPrice + itemTotal;
}

console.log("Total price of all items = " + totalPrice);



// QUESTION 2


var person = {
    name: "Ali",
    email: "ali@gmail.com",
    password: "12345",
    age: 25,
    gender: "Male",
    city: "Karachi",
    country: "Pakistan"
};



console.log("age" in person);
console.log("country" in person);



console.log("firstName" in person);
console.log("lastName" in person);


// QUESTION 3


function Student(name, age, city) {

    this.name = name;
    this.age = age;
    this.city = city;

}



var student1 = new Student("Ali", 20, "Karachi");

var student2 = new Student("Ahmed", 22, "Lahore");

var student3 = new Student("Sara", 21, "Islamabad");


console.log(student1);
console.log(student2);
console.log(student3);


// QUESTION 4


function Person(name, gender, address, education, profession) {

    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;

}


var records = [];


function addRecord() {

    var name = document.getElementById("name").value;

    var address = document.getElementById("address").value;

    var education = document.getElementById("education").value;

    var profession = document.getElementById("profession").value;


    var gender = document.querySelector(
        'input[name="gender"]:checked'
    ).value;


    var person = new Person(
        name,
        gender,
        address,
        education,
        profession
    );


    records.push(person);

    displayRecords();

}


function displayRecords() {

    var output = "";

    for (var i = 0; i < records.length; i++) {

        output +=
            "<p>" +
            "Name: " + records[i].name + "<br>" +
            "Gender: " + records[i].gender + "<br>" +
            "Address: " + records[i].address + "<br>" +
            "Education: " + records[i].education + "<br>" +
            "Profession: " + records[i].profession +
            "</p><hr>";

    }


    document.getElementById("records").innerHTML = output;

}