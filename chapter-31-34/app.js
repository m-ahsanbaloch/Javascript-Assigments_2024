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

var date = new Date();
var string = date.toString();
for (i = 0; i < string.length; i++) {
  if (
    string.slice(i, i + "Pakistan Standard Time".length) ===
    "Pakistan Standard Time"
  ) {
    neww = string.replace("Pakistan Standard Time", "PKT");
    document.write(neww + "<br>");
  }
}
var minutes = date.getTime();
minutes = Math.floor(minutes / 86400000);
document.write(`Elapsed minutes since ${new Date(length)}: ${minutes} Days`);
var ms = date.getTime();
