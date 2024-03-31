// ==== (Q-1) ====

// var date = new Date();
// document.write(date);

// ==== (Q-2) ====

// var months = ["jan","feb","march","april","may","june","july","august","sep","oct","nov","dec"]

//    var date = new Date()
//    var month = date.getMonth()
//    months = months[month]
//     document.write(months)

// ==== (Q-3) =====
// var days = [
//   "sun",
//   "Monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
// ];
// var date = new Date();
// var day = date.getDay();
// days = days[day];
// document.write(days);

// ==== (Q-4) ====

// var days = [
//   "sun",
//   "Monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
// ];
// var date = new Date()
// var day = date.getDay()
// days = days[day].toLowerCase()
// console.log(days)
// var check = false
// if(days === "saturday" || days === "sun"){
//     check = true
//     document.write(`ohh today is ${days}  and I am feeling very productive.`)
// }

// ==== (Q-5) ====
// var now = new Date();
// var day = now.getDate();
// console.log(day);
// if (day < 16) {
//   console.log(`first fifteen days`);
// } else {
//   console.log(`today is ${day} of month`);
// }

// ==== (Q-6) =====

// var date =  new Date("15 sep,1989");
// var string = date.toString();
// for (i = 0; i < string.length; i++) {
//   if (
//     string.slice(i, i + "Pakistan Standard Time".length) ===
//     "Pakistan Standard Time"
//   ) {
//     neww = string.replace("Pakistan Standard Time", "PKT");
//     // document.write(neww + "<br>");
//   }
// }
// var minutes = date.getTime();
// minutes = minutes.toString()
// minutes = Math.floor(minutes);
// document.write(`Elapsed miliseconds since ${new Date(length).toString().slice(0,15)}: ${minutes}  <br>`);
// var ms = date.getTime();
// //  ms = ms.toString()
//  ms = Math.floor(ms) / 1000 / 60
//  document.write(`Elapsed minutes since ${new Date(length).toString().slice(0,15)}: ${ms} `);

//  ==== (Q-7)=====
// var time = new Date().getHours()
// if(time < 12 ){
//   document.write(`It is Am now`)
// }
// else{document.write(`it is Pm now`)
// }

// ==== (Q-8)========
// var laterDate = new Date("31 dec, 2020")
// document.write(laterDate)

// ====  (Q-9)====================
// var eidDate = new Date("15 june, 2024").getTime();
// var dateNow = new Date().getTime();
// var minus = eidDate - dateNow                              //Days left to Eid ul Adha 2024
// var conversion = Math.floor(minus / (1000 * 60 * 60  * 24 ))
// document.write(`${conversion} days left to Eid ul Adha`)

// ==== (Q-10)===========
// var date = new  Date("5 dec, 2015");
// var dec = new Date("5 dec,2015").getTime()
// var jan = new Date("1 jan,2015").getTime()
// var minus = dec - jan
// var conversion = minus /1000 / 60
// document.write(`<b>On reference Date ${date},<br>${conversion} seconds had passed since begining of 2015</b>`)

// ==== (Q-11)===

// var currentDate = new Date()
// var date = new Date()
// var hours = date.getHours()
// date.setHours(date.getHours() - 1 );
// document.write(`Current Date: ${currentDate}<br>
// 1 hour ago, it was ${date}`)

// ==== (Q-12) ====

// var age = prompt("enter your date of birth")
// var currentDate = new Date().getTime()
// var dateOfBirth = new Date(age).getTime()
// var minus = currentDate - dateOfBirth
// var conver = Math.floor(minus / (1000 * 60 * 60 * 24 * 365))
// document.write(conver)

// ==== (Q-13) ===
// var customerName = prompt("Enter Your Name");
// document.write(`Customer Name: ${customerName}<br>`)
// var monthNames = ["january","february","march","april","may","june","july","august","september","november","december"];
// var month = new Date().getMonth();
// monthNames= monthNames[month];
// document.write(`Month: ${monthNames} <br>`)
// var units = +prompt("how many units you consumed");
// document.write(`Number of Units: ${units} <br>`)
// var unitCharges = 16
// document.write(`Charges of Units ${unitCharges} <br>`)
// var netAmountWdd = units * unitCharges;
// document.write(`Net Amount Payable (Within Due Date) ${netAmountWdd} <br>`)
// var latePayment = 350
// document.write(`Late Payment Surcharge ${latePayment} <br>`);
// var grossAmount = netAmountWdd + latePayment
// document.write(`Gross Amount Payable(After Due Date): ${grossAmount}`)

//// Completed/// 31/3/2024