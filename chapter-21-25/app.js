// === (Q-1) ===

// var fName = "Mohammad"
// var lName = "Ahsan"
// var fullName = `${fName} ${lName}`;
// document.write(fullName); // Mohammad Ahsan 

// ==== (Q-2) ====

var apple = "iphone 15 pro max"
var samsung = " samsung galaxy s6"
var phones = apple + samsung
var fPhone = prompt("enter your favourite phone");
var check = false
for(var i = 0; i < phones.length; i++){
    if(phones.slice(i,i + fPhone.length) === fPhone){
        check = true
        document.write(`my favourite phones is ${fPhone} </br>`)
        document.write(`index is ${phones.indexOf(fPhone)}`)
    }
}
if(check === false){
    document.write(`Sorry this device is not available right now`)
}