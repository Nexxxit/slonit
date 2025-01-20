// Задача 1

let obj = {
    name: 'Vasya',
    friends: 5, 
    likes: 19,
    projects: 7,
}

function getSumNumericFields (object) {
    let sumNumericFields = 0;
    for (key in object) {
        if (typeof object[key] === 'number') {
            sumNumericFields += 1;
        }
    }
    return sumNumericFields;
}

console.log(getSumNumericFields(obj));

// Задача 1*

function getSortedArrayNumericFields (object) {
    let arrayNumericFields = [];
    for (key in object) {
        if (typeof object[key] === 'number') {
            arrayNumericFields.push([key, object[key]]);
        }
    }
    arrayNumericFields.sort((a, b) => b[1] - a[1]);
    let sortedArrayNumericFields = arrayNumericFields.map((pair) => pair[0]);
    return sortedArrayNumericFields;
}

console.log(getSortedArrayNumericFields(obj));