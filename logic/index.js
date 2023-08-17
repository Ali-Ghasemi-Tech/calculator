let numbers = [];

let lastNumber = "";
let lastObjectInList = numbers[numbers.length-1];
const operators =['/' , '*' , '+' ,'-'];

const back = document.getElementById('back');
const equal = document.getElementById('equal');
const toggle = document.getElementById('toggle');
const float = document.getElementById('float');
const percent =document.getElementById('percent');
const clear = document.getElementById('clear');
const screen = document.getElementById("screen-section");
let text = '';
let result ;

const dontShow = ['C' , '+/-' , '', '='];

// save each button in a list so then you can use to calculate the equation  

[...document.querySelectorAll(".button")].forEach(el => el.addEventListener("click" ,() => {
    

    // print out list
    if(Number(el.textContent) || el.textContent === '.' || el.id === '0'){
        if(text.includes('.') && el.textContent === '.'){}
        else {
            lastNumber += el.textContent; 
            text += el.textContent;
        }
        
    }
    // add object to list 
    if(operators.includes(el.textContent) && lastNumber !== ""){
        numbers.push({num:lastNumber});
        text += el.textContent;
        lastNumber = "";
        numbers.push({opr:el.textContent});
    }
    
    // back button
    if(el.id === "back"){
        lastNumber = lastNumber.slice(0,-1);
        text = text.slice(0,-1);

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
        lastNumber = '';
        text = '';
    }
    // toggle button
    if(el.id === "toggle" && lastNumber !== ""){
        text = text.slice(0 , -lastNumber.length);
        if(parseFloat(lastNumber) < 0){
            let toggleNum = Math.abs(parseFloat(lastNumber));
            lastNumber = toggleNum.toString();
            text = text + `(${lastNumber})`;
        }else if(parseFloat(lastNumber) > 0){
            lastNumber = (-parseFloat(lastNumber)).toString();
            text = text + `(${lastNumber})`;
        }
    }
    // equal button
    if(el.id === 'equal' && lastNumber !== "" && numbers.some(()=>{
        return numbers.map((obj)=> obj.opr);
    }) && operators.includes(numbers[numbers.length-1].opr)){
        // equation function(needed)
        numbers.push({num:lastNumber});

            result = calculate(numbers);
            result = Number(parseFloat(result.toFixed(5)));

            console.table(numbers);

            numbers = [];
            text = String(result);
            lastNumber = '';
            lastNumber += String(result);

        console.log(lastNumber);
        
    }else if (el.id === "equal" && lastNumber === "" && numbers === []){
        console.log('enter a number')
        if(numbers !== [] && lastObjectInList.hasOwnProperty('opr'))
        console.log("doing sth wrong");
    }

    screen.innerHTML = `<div id="screen-section" class="flex overflow-hidden flex-row items-center justify-end pr-5 w-[92%] h-[200px] bg-blue-300 mt-4 rounded-xl">
    <span class="font-sans text-6xl text-black"> ${text}</span>
</div>`

    console.log(typeof(text))
    console.table(numbers)
        

    }
));




function countProperties(obj){
    let count = 0;
    for(var prop in obj){
        if(obj.hasOwnProperty(prop)){
            count ++;
        }
    }
    return count;
}


    // i rewrote the function and learned it's fundamentals
function calculate(equationList){
        const precedence = {'+':1, '-':1 , '*':2 , '/':2 , '%':2};
        const queueList =[];
        const stackList = [];

        for (const token of equationList){
            if(token.num){
                queueList.push(parseFloat(token.num));
            } else if(token.opr){
                const operator = token.opr;
                while(
                    stackList.length > 0 &&
                    precedence[stackList[stackList.length-1]] >= precedence[operator]
                ){
                    queueList.push(stackList.pop());
                    console.log(queueList);
                }
                stackList.push(operator);
            }
        }

        while(stackList.length > 0){
            queueList.push(stackList.pop());
        }
        const resultStack = [];
        for(const token of queueList){
            if(typeof token === 'number'){
                resultStack.push(token);
            } else {
                const b = resultStack.pop();
                const a = resultStack.pop();
                if(token === '-'){
                    resultStack.push(a-b);
                } else if(token === '+'){
                    resultStack.push(a+b);
                } 
                else if(token === '/'){
                    resultStack.push(a/b);
                } 
                else if(token === '*'){
                    resultStack.push(a*b);
                } 
        
            }
        }
        return resultStack[0];
    }

    
    
