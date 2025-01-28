const myFilter = (array, callback) => {
    const resultArray = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            resultArray.push(array[i]);
        }
    }

    return resultArray;
}

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = myFilter(numbers, function(num) {
  return num % 2 === 0;
});
console.log(evenNumbers);

const greaterThanThree = myFilter(numbers, function(num) {
  return num > 3;
});
console.log(greaterThanThree);