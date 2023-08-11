let numbers = [];

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
        // print out numbers
        if(Number(el.textContent)){
            lastNumber += el.textContent; 
        }
        // add object to numbers list 
        if(operators.includes(el.textContent) && lastNumber !== ""){
            numbers.push({num:lastNumber});
            lastNumber = "";
            numbers.push({opr:el.textContent});
        }
        
        // back button
        if(el.id === "back"){
            lastNumber = lastNumber.slice(0,-1);
        }
        // clear button
        if(el.id === "clear"){
            numbers = [];
        }
        // toggle button
        if(el.id === "toggle" && lastNumber !== ""){
            if(parseInt(lastNumber) <0){
               let toggleNum = Math.abs(parseInt(lastNumber));
               lastNumber = toggleNum.toString();
            }else if(parseInt(lastNumber) > 0){
                lastNumber = (-parseInt(lastNumber)).toString();
            }
        }
        // equal button
        if(el.id === 'equal' && lastNumber !== ""){
            // equation function(needed)
            numbers.push({num:lastNumber});
            lastNumber = ""
        }else if (el.id === "equal" && numbers[(numbers.length)-1].hasOwnProperty('opr') && lastNumber === ""){
            console.log("doing sth wrong");
        }

        console.table(numbers);
        console.log(lastNumber);
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
