const numbers = [
    {num:"+"},
    {num:"20"},
    {num:"30"}
]
let lastNumber = "";
let operator = "";
const operators =["+" ,"-" , "*" , "/"];

[...document.querySelectorAll(".button")].forEach(el => el.addEventListener("click" ,() => {
        if(Number(el.textContent)){
            lastNumber += el.textContent; 
            console.log(lastNumber)
        }
    }
));



const screen = document.getElementById("screen-section");

function countProperties(obj){
    let count = 0;
    for(var prop in obj){
        if(obj.hasOwnProperty(prop)){
            count ++;
        }
    }
    return count;
}


function add(obj , index =0){
    let total = Number(obj[index].num);
    let nextValue = Number(obj[index+1].num);
    total += nextValue;
    return total;
}

function subtract(obj , index = 0){
    let total = Number(obj[index].num);
    let nextValue = Number(obj[index+1].num);
    total -= nextValue;
    return total;
}

function multiply(obj , index = 0){
    let total = Number(obj[index].num);
    let nextValue = Number(obj[index+1].num);
    total *= nextValue;
    return total;
}

function divide(obj , index = 0){
    let total = Number(obj[index].num);
    let nextValue = Number(obj[index+1].num);
    total /= nextValue;
    return total;
}
