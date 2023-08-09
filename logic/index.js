const numbers = [
    {num:"1"},
    {num:"2"},
    {num:"3"}
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

console.log(countProperties(numbers))

function add(obj){
    let total = 0;
    obj.map((number) => {
        let nextValue = number.num;
        total += Number(nextValue); 
    });
    return total;
}

function subtract(obj){
    let total = obj[0].num;
    obj.splice(0,1);
    obj.map((number) => {
        let nextValue = number.num;
        total -= Number(nextValue); 
    });
    return total;
}

console.log(add(numbers))
console.log(subtract(numbers))