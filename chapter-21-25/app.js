// === (Q-1) ===

// var fName = "Mohammad"
// var lName = "Ahsan"
// var fullName = `${fName} ${lName}`;
// document.write(fullName); // Mohammad Ahsan

// ==== (Q-2) ====

// var phones = "iphone 15 pro max, samsung galaxy s24 ultra, vivo, oppo";
// var fPhone = prompt("enter your favourite phone");
// var check = false;
// for (var i = 0; i < phones.length; i++) {
//   if (phones.slice(i, i + fPhone.length) === fPhone) {
//     check = true;
//     document.write(`my favourite phones is : ${fPhone} </br>`);
//     document.write(`length of string is ${phones.indexOf(fPhone)}`);
//   }
// }
// if (check === false) {
//   document.write(`Sorry this device is not available right now`);
// }

// ==== (Q-3) =====

// var country = "pakistani"
// for(var i = 0; i < country.length ; i++){
// if(country.slice(i,i + country.length) === "n"){
// }
// }
// document.write(`String ${country}</br>`)
// document.write(`Index of "n" is: ${country.indexOf("n")}`);

// ==== (Q-4) =====
// var hello = "hello World";
// for (var i = 0; i < hello.length; i++) {
//     if(hello.lastIndexOf("l") !== -1){
//     }
// }
// document.write(`<b>String is: ${hello}</br></br></b>`)
// document.write(`<b>Last index of "l" is: ${hello.lastIndexOf("l")}</b>`)

// ==== (Q-5) =====
// var string = "pakistani"
// for(var i = 0; i < string.length; i++){
//     if(string.slice(i,i + string.length) === "i"){

//     }
// }
// document.write(`string: ${string}</br>`)
// document.write(`Character at index ${string.indexOf("i")} is: "i"` )

// ==== (Q-6) =====
// var fName = "Mohammad"
// var lName = "Ahsan"
// var fullName = `${fName} ${lName}`;
// document.write(fullName); // Mohammad Ahsan

// ==== (Q-7) ====
// var city = "hyderabad"
// var neww = ""
// var check = false
// for(var i = 0; i < city.length; i++){
//     if(city.slice(i,i + city.length) === "hyderabad"){
//         check = true
//         neww = city.replace("hyder","islam")
//     }
// }
// document.write(`City : ${city}</br>`)
// document.write(`After Replacement: ${neww}`)

// ==== (Q-8) =====
// var message =
//   "Ali and Sami are best friends. They play cricket and football together";
//   var neww = "";
// var check = false;
// for (var i = 0; i < message.length; i++){
//   if(message.slice(i,i + "and".length) === "and"){
//     check = true;
//     neww = message.replaceAll("and", "&");
// }
// }
// document.write(
// `Old Message Was:: ${message}</br> After Replacing Message is ${neww}`
// );

// ==== (Q-9) =====
// var string = "472"
// var number = +string
// document.write(`value ${string} </br> Type: ${typeof(string)}</br>`)
// document.write(`value ${number} </br> Type: ${typeof(number)}`)

// ==== (Q-10) ====
// var cap = prompt("Enter small alphabet words and see how it capitalize");
// var result = cap.toUpperCase()
// document.write(result)

// ==== (Q-11) ====
// var inp = prompt("enter words here");
// var cap = inp.slice(0,1).toUpperCase() + inp.slice(1)
// document.write(cap)

// ==== (Q-12) ====

// var num = 35.36
// var string = num.toString().replace(".","")
// document.write(`Number: ${num} </br> Result: ${string}`)

// ==== (Q-13) ====
// var userInput = prompt("enter user name please.");
// var check = false;
// if (userInput.charCodeAt() >= 33 && userInput.charCodeAt() <= 47) {
//   check = true;
//   alert("please enter valid username without characters");
// } else {
//   document.write(`You entered ${userInput} `);
// }

// ===== Question 14 ======
// var arr = ["cake", "apple", "pie", "cookie", "chips", "patties"];
// var search = prompt("enter what you would like to search").toLowerCase();
// var check = false;
// for (i = 0; i < arr.length; i++) {
//   if (search === arr[i]) {
//     check = true;
//     var index = "";
//     document.write(
//       `${arr[i]} is available at index ${arr.indexOf(search)} In out bakery`
//     );
//   }
// }
// if (check === false) {
//   document.write(`Sorry ${search} is not available in out bakery`);
// }


// ==== (Q-15) ====
// var num = ""
// // console.log(num)
// num = num.toString()
// var user = prompt("enter password")
// if(user.length > 6){
// alert("It must at least 6 characters long")
// }  
// if(user.charCodeAt() > 45  && user.charCodeAt() < 58){
//     alert("please enter alphabets first")
// }
// else if(user === ""){
//     alert("please enter valid password")
// }
// var storedPassword = user
// // console.log(num[i])
// console.log(storedPassword)

// ==== (Q-16) ====
// var university = "University of Karachi";
// var arr = university.split("")
// for(i = 0 ; i < arr.length ;i++){
//     document.write(arr[i] + "</br>" )
    
// }

// ==== (Q-17) =====
// var namee = "pakistan";
// for(i = 0; i < namee.length;i++){
    
//  var res = namee[7]
// }
// document.write(res)

// Declare a string
// var str = "the quick brown fox jumps over the lazy dog";

// var words = str.split(' ');

// var count = 0;

// for(i = 0;i < words.length;i++){
//     if(words[i] == "the"){
//         count++
//     }
// }
// document.write(`Text: the quick brown fox jumps over the lazy dog <br>`)
// document.write(`There are ${count} Occurence(s) of Words 'the'`) 