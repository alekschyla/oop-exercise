function CountApp(selector) {
    this.container = document.querySelector(selector);

    this.render();
}

CountApp.prototype.render = function () {
    this.container.innerHTML = '';

    const input = document.createElement("input");
    const button = document.createElement("button");
    const paragraph = document.createElement("p");


    button.innerText = "oblicz";
    button.addEventListener("click", () => {
        const object = this.returnObject(this.getInput(input.value));
        this.addToParagraph(paragraph, object);
    });

    this.container.appendChild(input);
    this.container.appendChild(button);
    this.container.appendChild(paragraph);
};

CountApp.prototype.average = function(array) {
    return this.sum(array) / array.length;
};

CountApp.prototype.sum = function (array) {
    return array.reduce((red, el) => red + el);
};

CountApp.prototype.median = function (array) {
    array.sort(function (a, b) {
        return a - b;
    });

    const half = Math.floor(array.length / 2);

    if (array.length % 2 === 0) {
        return (array[half] + array[half - 1]) / 2;
    }

    return array[half];
};

CountApp.prototype.minNumber = function (array) {
    return Math.min.apply(null, array);
};

CountApp.prototype.maxNumber = function (array) {
   return Math.max.apply(null, array);
};

CountApp.prototype.returnObject = function (array) {
    return {
        average: this.average(array),
        median: this.median(array),
        minNumber: this.minNumber(array),
        maxNumber: this.maxNumber(array),
    }
};

CountApp.prototype.getInput = function (numbers) {
    const numbersArray = numbers.split(' ');
    const newArray = numbersArray.map(el => Number(el));
    if (this.checkIfNumber(newArray)) {
        return newArray;
    }
};

CountApp.prototype.checkIfNumber = function (array) {
    let isNumber = true;
    array.forEach(el => {
        if (isNaN(el)) {
            isNumber = false;
        }
    });
    return isNumber;
};

CountApp.prototype.addToParagraph = function (where, object) {
    where.innerHTML = `
    <strong>Average:</strong> ${object.average} |
    <strong>Median:</strong> ${object.median} |
    <strong>Minimum number:</strong> ${object.minNumber} |
    <strong>Maximum number:</strong> ${object.maxNumber}
    `
};


const app = new CountApp('.container');