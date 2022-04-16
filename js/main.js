// 1-vazifa

var numbers = [1,3,5,9];
let num = 0;
function funksiya(){
    for (let i = 0; i < numbers.length; i++) {
        num+= numbers[i];  
    }
    return num;
}
console.log(funksiya());

// 2-vazifa

var numbers = [1, -5, 16, 0, 2];
let sum = 0;
function funksiya(){
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i]>=0) {
            sum+= numbers[i]
        }
    }
    return sum;
}

console.log(funksiya());

// 3-vazifa

var numbers = [3.02, -3.65, 5, -9];
var result = []

function funksiya() {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i]) {
            result[i] = Math.floor(Math.abs(numbers[i]))
        }

    }

    return result
}

console.log(funksiya())