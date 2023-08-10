const numbers = [];

let lastNumber = "";
let operator = "";

const operators =["+" ,"-" , "X" , "/"];

const back = document.getElementById('back');
const equal = document.getElementById('equal');
const toggle = document.getElementById('toggle');
const float = document.getElementById('float');
const percent =document.getElementById('percent');
const clear = document.getElementById('clear');

// save each button in a list so then you can use to calculate the equation  

[...document.querySelectorAll(".button")].forEach(el => el.addEventListener("click" ,() => {
        if(Number(el.textContent)){
            lastNumber += el.textContent; 
            console.log(lastNumber)
        }
        if(operators.includes(el.textContent)){
            numbers.push({num:lastNumber});
            lastNumber = "";
            numbers.push({opr:el.textContent});
        }
        if(el.id === 'equal' && lastNumber !== ""){
            numbers.push({num:lastNumber});
            lastNumber = ""
            // also run the equation function
        }else if(lastNumber === ""){
            console.log("the last part of equation is an operator ")
        }
        if(el.id === "back"){
            lastNumber = lastNumber.slice(0,-1);
            console.log(lastNumber)
        }
        console.table(numbers);
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
