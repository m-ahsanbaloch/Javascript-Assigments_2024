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
var hello = "hello World";
for (var i = 0; i < hello.length; i++) {
    if(hello.lastIndexOf("l") !== -1){
    }
}
document.write(`<b>String is: ${hello}</br></br></b>`)
document.write(`<b>Last index of "l" is: ${hello.lastIndexOf("l")}</b>`)
