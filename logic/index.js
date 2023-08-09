const numbers = [
    {num:"10"},
    {num:"20"},
    {num:"30"}
]

function countProperties(obj){
    let count = 0;
    for(var prop in obj){
        if(obj.hasOwnProperty(prop)){
            count ++;
        }
    }
    return count;
}

// console.log(countProperties(numbers))

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
console.log(add(numbers))
console.log(subtract(numbers))
console.log(multiply(numbers))
console.log(divide(numbers))