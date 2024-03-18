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

// ---------------- This is with method ------------

// var arr = ["cake", "apple", "pie", "cookie", "chips", "patties"];
// var search = prompt("which cake you are searching for enter here");
// var check = false
// for(var i = 0 ; i < arr.length; i++){
//     // console.log(arr[2])
//     if(arr.indexOf(search) !== -1 ){
//         check = true
        
//         // var neww =  arr[i]
//         document.write(`${search} Found </br>`);
//     }
// }
// if(check === false){
//     document.write(`${search} Not found`)
// }

// ---*----*----*-----*---- With-Out Method ---*---*---*--*---*---*---

// var text = ["cake","apple","pie","cookie","chips","patties"];
// var check = false
// var search = prompt("enter what you like to search");
// for(i = 0; i < text.length; i++){
//     text = text.toString()
//     if(text.slice(i,i + search.length) === search){
//         check = true
//         text = text.split(',')
//         document.write(`${search} is Available  `);
//         document.write("at index " + text.indexOf(search))
//         break
//     }
// }
// if(check == false){
//     console.log(`we are sorry ${search} is not in the bakery)
// }

// ==== (Q-8) ====
// var a = [24, 53, 78, 91, 12];
// var largestNumber = a[0]
// for(var i = 0 ; i < a.length; i++){
//     if(a[i] > largestNumber){
//         largestNumber = a[i]
//     }
// } 
// document.write(`Largest Number is<b> ${largestNumber}</b> </br></br> between </br> ${a}`)

// ==== (Q-9) ====
// var a = [24, 53, 78, 91, 12];
// var smallestNumber = a[0]
// for(var i = 0 ; i < a.length; i++){
//     if(a[i] < smallestNumber){
//         smallestNumber = a[i]
//     }
// } 
// document.write(`smallest Number is<b> ${smallestNumber}</b> </br></br> between </br> ${a}`)
