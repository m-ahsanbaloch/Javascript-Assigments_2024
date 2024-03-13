// ************************ CHAPTER-9-11 ************************
// ==== Q-1 ====
// var city = prompt("Enter City Name");
// var cityName = "karachi"
// if(city === cityName){
//     alert("Welcome To City Of Light")
// }
// else{
//     alert("Enter Valid City Name: (Hint:Starts With k)")
// }
// ==== Q-2 ====
// var gender  = prompt("Enter Your Gender")
// if(gender === "male"){
//     alert("Hello Jiger")
// }
// else if(gender === "female"){
//     alert("Salam Mohatarma")
// }
// else{
//     alert("Sorry Not Interested")
// }

// ==== Q-3 ====
// var signalColor = prompt("Enter Signal  Color ");
// if(signalColor === "red"){
//     alert("Must Stop")
// }
// else if(signalColor === "yellow"){
//     alert("ready to movie")
// }
// else if(signalColor === "green"){
//     alert("Go Ahead")
// }
// else{
//     alert( "Invalid Input")
// }

// ==== Q-4 ====
// var remaining = prompt("how many litres fuel remaining in your car")
// if(remaining  <= 0.25 || alert("Dont Worry You can Go Relaxly")){
//     alert("please refill your fuel as soon as possible")
// }

// ==== Q-5 =====
// (A)
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// (B)
// var b = 82;
// if (++b === 83) {
//   alert("given condition for variable b is true");
// }

// (C)
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }else{alert("condition is false")}
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }else{alert("condition 3 is false")}
// if(c === 14){
// alert("condition 4 is true");
// }

// (D)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals: " + totalCost);
// }

// (E)
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }

// (F)
// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }

// ==== Q-6 ====
// var totalMarks1 = +prompt("what are the total marks of each subject") * 3;
// var subject1 = prompt("enter Subject one");
// var subject1Marks = +prompt("enter how many marks you obtained in " + subject1);

// var subject2 = prompt("enter Subject two");
// var subject2Marks = +prompt("enter how many marks you obtained in " + subject2);

// var subject3 = prompt("enter Subject three");
// var subject3Marks = +prompt("enter how many marks you obtained in " + subject3);
// var percentage =
//   ((subject1Marks + subject2Marks + subject3Marks) * 100) / totalMarks1;
// var totalObtained = subject1Marks + subject2Marks + subject3Marks;
// var grade = "";
// if (percentage >= 80) {
//   grade = "A-One " + " " + "Excellent";
// } else if (percentage >= 70) {
//   grade = "A " + " " + "Very Good";
// } else if (percentage >= 60) {
//   grade = "B " + " " + "you need imporvement";
// } else {
//   grade = "fail" + " " + "Sorry";
// }
// document.write("<b>" + " " + "Total Marks " + totalMarks1 + "</b></br>");
// document.write("<b>" + " " + "Marks Obtained " + totalObtained + "</b></br>");
// document.write("<b>" + " " + "Percentage " + percentage + "%" + "</b></br>");
// document.write("<b>" + " " + "Grade: " + grade + "</b></br>");

// ===== Q-7 =======
// var secretNumber = 7;
// var guessNumber = +prompt("Guess The Secret Number.(Range: 0 to 10)");
// if(guessNumber === 7){
//     alert("Bingoo! Correct Answere")
// }
// else if(guessNumber === 8){
//     alert("Close Enough To The Correct Answere")
// }
// else if(guessNumber === 6){
//     alert("Close Enough To The Correct Answere")
// }
// else{alert("Sorry You Are Out")}

// ==== Q-8 ====
// var num = +prompt(
//   "Enter a number which should me divisble with 3 and answere must be without decimal (Range: 0 t0 20)"
// );
// if (num === 6 || num === 9 || num === 12 || num === 15 || num === 18) {
//   alert("yeaa" + " " + num + " " + "correct Answere");
// } else {
//   alert(num + " " + "wrong answere");
// }

// ===== Q-9 ======
// var num = +prompt("enter number to find even or odd number.(Range: 0 to 10)");
// if(num === 2 || num === 4 || num === 6 || num === 8 || num === 10){
//     alert(num + " " + "is Even Number")
// }
// else{
//     alert(num + " " + "is odd Number")

// }

// ===== Q-10 ======
// var temperature = +prompt("what is temperature of your city");
// if(temperature === 40){
//     alert("its too Hot Outside")
// }
// else if(temperature === 30){
//     alert("The Weather is Normal Today")
// }
// else if(temperature === 20){
//     alert("the weather is cool today")
// }
// else if(temperature === 10){
//     alert("OMG! The Weather is so cool Today ")
// }

// ==== Q-11 ====
// var num1 = +prompt("enter fist number");
// var operator = prompt("enter operator you want to use");
// var num2 = +prompt("enter second number");
// if(operator === "+"){
//     alert("result is " + num1 + num2)
// }
// else if(operator === "-"){
//     alert("result is " + num1 - num2)
// }
// else if(operator === "/"){
//     alert("result is " + num1 / num2)
// }
// else if(operator === "%"){
//     alert("result is " + num1 % num2)
// }

// ************************************Chapter-12-11****************************
// ==== Q-1 ====
// var character = prompt("enter a number or string to check character");
// if (character >= "0" && character <= "9") {
//   alert(character + " is a number");
// }
// else if(character >= "a" && character <= "z"){
//     alert(character.charCodeAt() + " is a lowercase letter");
//     console.log(character.charCodeAt())
// }
// else if (character >= "A" && character <= "Z"){
//     alert(character.charCodeAt() + " is an uppercase letter");
    
// }
// else{
//     alert(character + " is Not a Number or String")
// }

// ==== Q-2 ====
// var firstInteger = +prompt("enter first Integer");
// var secondInteger = +prompt("enter Second Integers");
// if(firstInteger > secondInteger ){
//     alert("firstinteger" + " " +" is larger than second integer");
// }
// else if(secondInteger > firstInteger){
//     alert("second integer" + " " + "is larger than first integer")
// }
// else{
//     alert("Both integers are equal")
// }

// =====Q3=====
// var checkNumber = +prompt("enter a number to check wheter it is positive or negative");
// if(checkNumber >  0){
//     alert(checkNumber + " is Positive");
// }
// else if(checkNumber < 0){
//     alert(checkNumber + " is Negative");
// }

// ==== Q-4 ====
// var character = prompt("Enter a character:");
// var vowels = ["a", "e", "i", "o", "u"];
// var check = false;

// for (var i = 0; i < vowels.length; i++) {
//   if (character === vowels[i]) {
//     check = true;
//     alert(character + " is a vowel");
// }

// }
// if(check === false) {
//     alert(character + " is not a vowel");
// }

// ==== Q-5 ====
// var cPassword = "abc321.."
// var password = prompt("please enter your password")
// if(password === "" ){
//     alert("please Enter Password")
// }
// else if(cPassword === password){
//     alert("correct! the passwrod you enter is matched")
// }
// else{
//     alert("you have entered invalid password")
// }

// ==== Q6 ====
//  This if/else statement does not work. Try to fix it:
// var greeting;
// var hourq = +prompt("enter hour to see");
// var hour = 13;
// if (hourq < hour) {
//   greeting = "Good morning";
//   alert(greeting);
// } else if (hourq > hour && hourq < 17) {
//   greeting = "Good Day";
//   alert(greeting);
// } else if (hourq >= 17) {
//   greeting = "good evenening";
//   alert(greeting);
// } else {
//   greeting = "Good evening";
//   alert(greeting)

// }

// var time = prompt("Enter time to check greetings")
// if(time >= "0000" && time <= "12"){
// alert("Good Morning")
// }
// else if(time >= "12" && time <= "17"){
//     alert("Good Afternoon")
// }
// else if(time >= "17" && time <= "21"){
//     alert("Good Evening")
// }
// else if(time >= "21" && time <= "2359"){
//     alert("Good Night Buddy")
// }