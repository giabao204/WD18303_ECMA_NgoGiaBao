
let mutiply = (num1, num2) => {
    return num1 * num2;
}
console.log(mutiply(1,2))


let toCelsius = (fahrenheit) => {
    return (5/9) * (fahrenheit - 32);
}
console.log(toCelsius(100))


let padZeros = (num, totalLen) => {
    let numStr = num.toString();
    let numZeros = totalLen - numStr.length;
    for (let i = 1; i <= numZeros; i++){
        numStr = "0" + numStr;
    }
    return numStr;
}
console.log(padZeros(1,5))


let power = (base, exponent) => {
    let result = 1;
    for (let i = 0; i < exponent; i++){
        result *= base;
    }
    return result;
}
console.log(power(2,3))

let greet = (who) =>{
    console.log("Hello " + who);
}
console.log(greet("bao"));