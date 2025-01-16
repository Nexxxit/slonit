function mySlice (arr, start = 0, end = arr.length) {
    let result = [];
    if (start < 0) start = arr.length + start;
    if (end < 0) end = arr.length + end;

    for (let i = Math.max(start, 0); i < Math.min(end, arr.length); i++) {
        result.push(arr[i]);
    }
    return result;
}

function myIndexOf (arr, item, from = 0) {
    if(from < 0) from = arr.length + from;
    from = Math.max(from, 0);

    for (let i = from; i < arr.length; i++) {
        if (item === arr[i]) {
            return i;
        }
    }
    return -1;
}

function myIncludes(arr, item, from = 0) {
    if(from < 0) from = arr.length + from;
    from = Math.max(from, 0);

    for (let i = from; i < arr.length; i++) {
        if (item === arr[i]) {
            return true;
        }
    }
    return false;
}

let fruits = ["Яблоко", "Банан", "Апельсин"];

console.log(mySlice(fruits, 1));
console.log(myIndexOf(fruits, "Банан"));
console.log(myIncludes(fruits, "Банан"));