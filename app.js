// ------------------ CHAPTER 1 ------------------

// -- 1
//  alert("Welcome")

// -- 2
// alert("Error! Please enter a valid password")

// -- 3
// alert("Welcome JS Land... \r\nHappy Coding!")

// -- 4
// alert("Welcome JS Land...")
// alert("Happy Coding!")

// ------------------ CHAPTER 2 ------------------

// -- 1
// var username

// -- 2
// var myName = "Miza Mahad Baig"

// -- 3
// var message = "Hello World"
// alert(message)

// -- 4
// var fullname = "Jhone Doe"
// var age = "15 years old"
// var course = "Certified Mobile Application Development"
// alert(fullname)
// alert(age)
// alert(course)

// -- 5
// var pizza = "PIZZA \r\nPIZZ\r\nPIZ \r\nPI\r\nP"
// alert(pizza)

// -- 6
// var email = "mahadmirza681@gmail.com"
// alert ("my email address is " + email)

// -- 7
// var book = "A smarter\r\nway to learn JavaScript"
// alert ("I am trying to learn from the book " + book)

// -- 8
// var html = "Yah! I can write HTML content through JavaScript"
// document.write(html)

// -- 9
// var symbols = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(symbols)

// ------------------ CHAPTER 3 ---------------

// -- 1
// var age = "17"
// alert("I am " + age + " years old")

// -- 2
// var text = "Your visit count = " 
// var visitcount = localStorage.getItem("page_view")

// if (visitcount) {
//     visitcount = Number (visitcount) + 1;
//     localStorage.setItem("page_view" , visitcount);
    
// } else {
//     visitcount = 1;
//     localStorage.setItem("page_view" , 1);
// }

// alert (text + visitcount)

// -- 3
// var birthyear = 2004
// document.write("My birthyear is " + birthyear)
// document.write("<br />")
// document.write("Data type of my declared variable is number")

// -- 4
// var name = "John Doe"
// var Product = " T-shirts"
// var quantity = 5
// document.write(name + " ordered " + quantity + Product, " from XYZ clothing store")

// ------------------ CHAPTER 4 ---------------

// -- 1
// var [var1 ,var2 ,var3] = ["variable 1","variable 2","variable 3"]
// alert (var1)
// alert (var2)
// alert (var3)

// -- 2
// legal names
// var [name , $dollar , mahad1 , _abc , XYZ]
// illegal names
// var [123 , 1mahad , @bgc , mahad-baig , /V\]

// -- 3
// document.write ("<h1>Rules for naming JS variables</h1>")
// document.write ("<br />")
// document.write ("<br />")
// document.write ("Variable names can only contain letters , numbers , $ and _.")
// document.write ("<br />")
// document.write ("Variables must begin with a letter, $ or _. For example $name, _name or name")
// document.write ("<br />")
// document.write ("Variable names are case sensitive")
// document.write ("<br />")
// document.write ("Variable names should not be JS Keywords")
// document.write ("<br />")


// ------------------ CHAPTER 5 ---------------


// -- 1
// var num1 = 3;
// var num2 = 5;
// var newnum = num1 + num2

// document.write("Sum of ", num1 ," and ", num2 ," is ", newnum)

// -- 2
// var num1 = 3;
// var num2 = 5;

// Subtraction
// var newnum = num1 - num2
// document.write("Subtraction of ", num1 ," and ", num2 ," is ", newnum)

// Multiplication
// var newnum = num1 * num2
// document.write("Multiplication of ", num1 ," and ", num2 ," is ", newnum)

// Division
// var newnum = num1 / num2
// document.write("Multiplication of ", num1 ," and ", num2 ," is ", newnum)

// Modulus
// var newnum = num1 % num2
// document.write("Modulus of ", num1 ," and ", num2 ," is ", newnum)

// -- 3
// var value = undefined
// var initial = 5
// var number = 5
// var increment = ++number
// var newnum = increment + 7
// var decrement = --newnum
// var remainder = decrement % 3


// document.write ("Value after variable declaration is " + undefined )
// document.write ("<br />")
// document.write ("Inital Value: " + initial )
// document.write ("<br />")
// document.write ("Value after increment: " + increment )
// document.write ("<br />")
// document.write ("Value after addition: " + newnum )
// document.write ("<br />")
// document.write ("Value after decrement: " + decrement )
// document.write ("<br />")
// document.write ("The Remainder: " + remainder )
// document.write ("<br />")

// -- 4
// var ticketcost = 600
// var amount = 5
// document.write ("The cost of "+ amount + " tickets is " + ticketcost*amount)

// -- 5
// document.write("Table of 8: <br>")
// var table = 8
// var b = table*1;
// var c = table*2;
// var d = table*3;
// var e = table*4;
// var f = table*5;
// var g = table*6;
// var h = table*7;
// var i = table*8;
// var j = table*9;
// var k = table*10;

// document.write("<br> 8 x 1 = "+ b) 
// document.write("<br> 8 x 2 = " + c) 
// document.write("<br> 8 x 3 = " + d) 
// document.write("<br> 8 x 4 = " + e) 
// document.write("<br> 8 x 5 = " + f) 
// document.write("<br> 8 x 6 = " + g) 
// document.write("<br> 8 x 7 = " + h) 
// document.write("<br> 8 x 8 = " + i) 
// document.write("<br> 8 x 9 = "+ j) 
// document.write("<br> 8 x 10 = " + k) 

// -- 6
// var tempC = 25;
// var convF = (tempC * 9/5) + 32;
// var tempF = 70;
// var convC = (tempF - 32) * 5/9;

// document.write(tempC + "^C = " + convF + "^F <br>");
// document.write(tempF + "^F = " + convC + "^C");

// -- 7
// var itemOne = 600;
// var qtOne = 2;
// var itemTwo = 1100;
// var qtTwo = 4;
// var shippingCharges = 300;
// var totalCost = (itemOne*qtOne) + (itemTwo*qtTwo) + shippingCharges;

// document.write("Price of item 1 is " + itemOne);
// document.write("<br> Quantity of item 1 is " + qtOne);
// document.write("<br> Price of item 2 is " + itemTwo);
// document.write("<br> Quantity of item 2 is " + qtTwo);
// document.write("<br> Shipping charges are " + shippingCharges);
// document.write("<br> Total Cost: " + totalCost);

// -- 8
// var obtMarks = 757;
// var tMarks = 850;
// var per = (obtMarks/tMarks)*100;

// document.write("Obtained marks: " + obtMarks)
// document.write(" <br> Total marks: " + tMarks)
// document.write(" <br> Percentage:  " + per);

// -- 9
// var curUS = 10;
// var curPkUS = curUS * 104.80;
// var curSaudi  = 25
// var curPkSaudi = curSaudi * 28;

// document.write("Total currency in PKR = " + (curPkUS + curPkSaudi));

// -- 10
// var x = 7;
// var y = (7 + 5)*10/2;

// -- 11 -- 12 -- 13

// ------------------ CHAPTER 5 ---------------

// -- 1
// document.write("Result")
// var x = 10;

// document.write("<br> The value of x is " + x);
// document.write("<br> The value of ++x is " + ++x);
// document.write("<br> Now the value of x is " + x);
// document.write("<br> The value of x++ is " + x++);
// document.write("<br> Now the value of x is " + x);
// document.write("<br> The value of --x is " + --x);
// document.write("<br> Now the value of a is " + x);
// document.write("<br> The value of x-- is " + x--);
// document.write("<br> Now the value of x is " + x);

// -- 2
// --a; 1
// --a - --b;1-0
// --a - --b + ++b;1-0+2
// --a - --b + ++b + b--;1-0+2+2

// -- 3
// var userName = prompt("Enter your name");

// document.write(userName);
// alert("Hello" + userName);

// -- 5
// var number = parseInt(+prompt("Enter a number"));

// document.write("Table of " + number);
// document.write(number + " x 1 = " + number);
// document.write("<br>" + number + " x 2 = " + number*2);
// document.write("<br>" + number + " x 3 = " + number*3);
// document.write("<br>" + number + " x 4 = " + number*4);
// document.write("<br>" + number + " x 5 = " + number*5);
// document.write("<br>" + number + " x 6 = " + number*6);
// document.write("<br>" + number + " x 7 = " + number*7);
// document.write("<br>" + number + " x 8 = " + number*8);
// document.write("<br>" + number + " x 9 = " + number*9);
// document.write("<br>" + number + " x 10 = " + number*10);

// -- 6
// var sub1 = prompt("First subject");
// var sub2 = prompt("Second subject");
// var sub3 = prompt("Third subject");
// var total = 300;
// var marks1 = +prompt("Marks of " + sub1);
// var marks2 = +prompt("Marks of " + sub2);
// var marks3 = +prompt("Marks of " + sub3);
// var obtMarks = marks1+marks2+marks3;

// document.write(sub1+":"+marks1);
// document.write("<br>"+sub2+":"+marks2);
// document.write("<br>"+sub3+":"+marks3);
// document.write("<br>Total marks = 300")
// document.write("<br>Obtained marks = "+obtMarks);
// document.write("<br>Percentage = "+ obtMarks/total*100 )

// ------------------ CHAPTER 5 ---------------

// -- 1
// var cityName = prompt("city name");
// if(cityName == "Karachi" || "karachi"){
//     alert("Welcome to the city of lights")
// }

// -- 2
// var gender = prompt("Enter your gender");
// if(gender == "male" ){
//     alert("Good morning Sir!")
// }
// else if(gender == "female"){
//     alert("Good morning madam!")
// }
// else{alert("Good morning")}