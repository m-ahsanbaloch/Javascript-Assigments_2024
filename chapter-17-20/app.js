// ==== (Q-1) ===
// var multiArr = [[],[],[]]
// console.log(multiArr)

// ==== (Q-2) ===
// var multiArr = [["0123"],["1012"],["2101"]]
// document.write(`${multiArr[0]} </br> ${multiArr[1]} </br> ${multiArr[2]}`);

// ==== (Q-3) ===
// for(var i = 1; i <= 10; i++){
// document.write(`<b>${i}</b> </br>`)
// }

// ==== (Q-4) ===
// var tableOf = +prompt("Enter which table you want to show in browser");
// var tableLength = +prompt("enter table length you want to see in browser");
// for(var i = 1; i <= tableLength;i++){
//     document.write(`${tableOf} x ${i} = ` + tableOf * i +  "</br>")
// }

// ==== (Q-5) ===
// var fruits = ["“apple”", "“banana”", "“mango”", "“orange”","“strawberry”"];
// for(var i = 0; i < fruits.length; i++){
//     document.write(`${fruits[i] }</br>`)    
// }
// document.write(`</br>Element at index 0 is ${fruits[0]} </br>
// Element at index 1 is ${fruits[1]} </br>
// Element at index 2 is ${fruits[2]} </br>
// Element at index 3 is ${fruits[3]} </br>
// Element at index 4 is ${fruits[4]} </br>`)

// === (Q-6) ===
// (A)
// document.write(`<h3>Counting</h3>`)
// for(var i = 0; i <= 15 -1; i++){
//     document.write( ` ${i}`)
// }

// (B)
// document.write(`<h3>Reverse-Counting</h3>`)
// for(var i = 15 ; i > 0 ; i--){
//     document.write(`<b>${i} &nbsp&nbsp</b>`)
// }

// (C)
// document.write(`<h3>Even</h3>`)
// for(var i = 2 ; i <= 20 ; i +=2){
//     document.write(i + " ")
// }

// (D)
// document.write(`<h3>Odd</h3>`)
// for(var i = 1; i <= 20 ; i += 2){
//     document.write(i)
// }

// document.write(`<h3>Series</h3>`)
// for(var i = 2 ; i <= 20 ; i +=2){
//         document.write(i  +  "k" + ". ")
//      }
    
// === (Q-7) ===

var arr = ["cake", "apple", "pie", "cookie", "chips", "patties"];
var search = prompt("which cake you are searching for enter here");
var check = false
for(var i = 0 ; i < arr.length; i++){
    console.log(arr[2])
    if(arr[i].slice(i , i + search.length) === search){
        check = true
        // var neww =  arr[i]
       document.write(`${search} Found </br> ${arr[i]} at index ${i}`);
    }
}
if(check === false){
    document.write(`${search} Not found`)
}