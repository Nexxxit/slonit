// Задача 1

let str = 'hello world';

function upperCaseFirstChar(string) {
    if(!str) return str;

    return string[0].toUpperCase() + string.slice(1);
}

console.log(upperCaseFirstChar(str));

// Задача 2

let longStr = 'Lorem ipsum odor amet, consectetuer adipiscing elit.';

function trimString(string, sizeOfRestriction) {
    if(string.length > sizeOfRestriction) {
        const marks = [' ', ',', '.', '!', '?', ':', ';'];
        let lastIndex = marks.map((marks) => string.lastIndexOf(marks, sizeOfRestriction))
        .reduce((max, current) => Math.max(max, current), -1);

        let resultString = string.slice(0, lastIndex !== -1 ? lastIndex : sizeOfRestriction);

        return resultString + '...';
    }
    return string;
}

console.log(trimString(longStr, 35));

// Задача 3

function isSubstring(string_1, string_2) {
    if(typeof string_1 !== 'string' || typeof string_2 !== 'string'){
        return "Ошибка";
    }

    return string_1.includes(string_2) || string_2.includes(string_1);
}

console.log(isSubstring("hello world", "orl"));