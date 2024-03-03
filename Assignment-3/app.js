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
