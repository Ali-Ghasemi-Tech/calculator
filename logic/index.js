let numbers = [];

let lastNumber = "";
let lastObjectInList = numbers[numbers.length-1];
const operators =['/' , 'X' , '+' ,'-'];

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
            if(lastNumber === "" && numbers.length !== 0){
                let lastObjectKey = Object.keys(numbers)[numbers.length-1];
                numbers[lastObjectKey]
                if(operators.includes(numbers[lastObjectKey].opr)){
                    numbers.pop();
                }else{
                    lastNumber += numbers[lastObjectKey].num;
                    lastNumber = lastNumber.slice(0 , -1);
                    numbers.pop();
                }
            }
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
        if(el.id === 'equal' && lastNumber !== "" && numbers.some(()=>{
            return numbers.map((obj)=> obj.opr);
        }) && operators.includes(numbers[numbers.length-1].opr)){
            // equation function(needed)
            numbers.push({num:lastNumber});
                const result = calculate(numbers);
                console.log(result);
            lastNumber = ""
            console.log(lastNumber);
            console.table(numbers);
        }else if (el.id === "equal" && lastNumber === "" && numbers === []){
            console.log('enter a number')
            if(numbers !== [] && lastObjectInList.hasOwnProperty('opr'))
            console.log("doing sth wrong");
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


function add(obj , index){
    let total = Number(obj[index-1].num);
    let nextValue = Number(obj[index+1].num);
    total += nextValue;
    return total;
}

function subtract(obj , index){
    let total = Number(obj[index-1].num);
    let nextValue = Number(obj[index+1].num);
    total -= nextValue;
    return total;
}

function multiply(obj , index){
    let total = Number(obj[index-1].num);
    let nextValue = Number(obj[index+1].num);
    total *= nextValue;
    return total;
}

function divide(obj , index){
    let total = Number(obj[index-1].num);
    let nextValue = Number(obj[index+1].num);
    total /= nextValue;
    return total;
}
    // got help from chat gpt since i couldn't fix the operator order 
function calculate(equationList){
    
        const precedence = {'+': 1, '-': 1, 'X': 2, '/': 2};
        const outputQueue = [];
        const operatorStack = [];
    
        for (const token of equationList) {
            console.log(token)
            if (token.num) {
                outputQueue.push(parseFloat(token.num));
            } else if (token.opr) {
                const operator = token.opr;
                console.log(operator)
                while (
                    operatorStack.length > 0 &&
                    precedence[operatorStack[operatorStack.length - 1]] >= precedence[operator]
                ) {
                    outputQueue.push(operatorStack.pop());
                    console.log(outputQueue);
                    console.log(operatorStack)
                }
                operatorStack.push(operator);
            }
        }
    
        while (operatorStack.length > 0) {
            outputQueue.push(operatorStack.pop());
        }
    
        const resultStack = [];
        for (const token of outputQueue) {
            if (typeof token === 'number') {
                resultStack.push(token);
            } else {
                const b = resultStack.pop();
                const a = resultStack.pop();
                if (token === '+') {
                    resultStack.push(a + b);
                } else if (token === '-') {
                    resultStack.push(a - b);
                } else if (token === 'X') {
                    resultStack.push(a * b);
                } else if (token === '/') {
                    resultStack.push(a / b);
                }
            }
        }
    
        return resultStack[0];
    }
    
    
