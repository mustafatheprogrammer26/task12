let userNum = prompt("Enter a Number which you like a table of number")
let lenght = prompt("Enter the Lenght of Table")

let number = userNum;
let table = "";
for (let i = 1; i <= lenght ; i++) {
    table += `${userNum} x ${i} = ${userNum * i} <br> \n`; 
}
document.write(table)
console.log(table);


let store = ["cake", "apple pie", "cookie", "chips", "patties"]
let value = prompt("Enter any Biscuit Name")

for(let i = 0 ; i< store.length ; i++ ){
    alert("found")
    break
}{
    alert("not found")
}


let num1 = 12;    
let num2 = 7;     
let num3 = 18;    

let smallest;  

if (num1 < num2 && num1 < num3) {
    smallest = num1;
} else if (num2 < num1 && num2 < num3) {
    smallest = num2;
} else {
    smallest = num3;
}
console.log("The smallest number is: " + smallest + ".");


let br = "<br>"
document.write(br)

let num = prompt("Enter any number of table")
let tab = ""

let numb = num
for(let i = 1; i<= 20 ;i++){
    tab += ` ${num* i}  \n`; 
}
document.write(tab)
console.log(tab);