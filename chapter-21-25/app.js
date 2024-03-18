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
var string = "472"
var number = +string
document.write(`value ${string} </br> Type: ${typeof(string)}</br>`)
document.write(`value ${number} </br> Type: ${typeof(number)}`)
