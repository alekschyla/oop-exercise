const myArray = [9, 3, 12];

function average (array) {
    return sum(array) / array.length;
}

function sum(array) {
    return array.reduce( (red, el) => red + el);
}

function median (array) {
    array.sort(function(a,b) {return a - b;});

    const half = Math.floor(array.length / 2);

    if (array.length % 2 === 0) {
        return (array[half] + array[half - 1]) / 2;
    }

    return array[half];
}

function minNumber(array) {
    return Math.min.apply(null, array);
}

function maxNumber(array) {
    return Math.max.apply(null, array);
}

function returnObject(array) {
    return {
        average: average(array),
        median: median(array),
        minNumber: minNumber(array),
        maxNumber: maxNumber(array),
    }
}


console.log(returnObject(myArray));