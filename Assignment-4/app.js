// ********** Chapter - 14 - 16 **********
// // === Q-1 ===
// var eArr = []
// // === Q-2 ===
// var students = []
// // === Q-3 ===
// var sArr = ["ahsan"]
// // === Q-4 ===
// var nArr = [1244]
// // ===  Q-5 ====
// var bArr = [true,false]
// // ===  Q-6 ===
// var mArr = ["string",1234,true]
// // ===  Q-7 ===
// var qualification = ["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M.", "Phil.", "PhD"]
// ===  Q-8 ===
// var sNames = ["michael","john","tony"];
// var sScores = [320 , 230 , 480];
// var student1 = document.write(sNames[0] + " is" + " " + sScores[0] + " " + sScores[0] * 100 / 500 + "%" + "</br>")
// var student2 = document.write(sNames[1] + " is" + " " + sScores[1] + " " + sScores[1] * 100 / 500 + "%" + "</br>")
// var student2 = document.write(sNames[2] + " is" + " " + sScores[2] + " " + sScores[2] * 100 / 500 + "%" + "</br>")
// === Q-9 ===
var colorNames = [];
// document.write(colorNames);
// == A
ask = prompt("what what color do you like to add at the beginning");
if (colorNames) {
  colorNames.unshift(`First index Color Name is ::<b> ${ask}</b></br>`);
}
// document.write(`${colorNames} </br>`);

// == B
if (colorNames) {
  var lastC = prompt("which color name would you like to add at end");
  colorNames.push(`Last index Color Name is ::<b> ${lastC}</b>`);
}
document.write(`${colorNames} </br>`);
// == C
var beg1More = prompt("enter one more color to add 1 more at beggining");
var beg2More = prompt("enter one more color to add 1 more at beggining");
if (beg1More && beg2More) {
  colorNames.unshift(` ${beg1More} `);
  colorNames.unshift(` ${beg2More} `);

  document.write(
    `Color Added At beggining ::<b> ${beg1More}, ${beg2More} </b></br>`
  );
}
// == D
document.write(`deleted first color name :: ${colorNames.shift("")}</br>`);
// == E
 var deletedLast = colorNames.pop("")
 document.write(`deleted last array ${deletedLast}</br> `)
