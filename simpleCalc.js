function calculate (a, b, operationFunction) {
    return operationFunction(a, b);
}

const operationMult = function (a, b) {
    return `${a} * ${b} = ${a * b}`;
}

const operationPlus = function (a, b) {
    return `${a} + ${b} = ${a + b}`;
}

const operationMinus = function (a, b) {
    return `${a} - ${b} = ${a - b}`;
}

const operationDiv = function (a, b) {
    return `${a} / ${b} = ${a / b}`;
}

const operations = {
    multiply: operationMult,
    plus: operationPlus,
    minus: operationMinus,
    divide: operationDiv,
}

const selectedOperation = "multiply";
console.log(calculate(6, 3, operations[selectedOperation]));