function showMultiplicationTable(number) {
    var output = "";
    for (var i = 1; i <=10; i += 1) {
        output += number + " x " + i + " = " + number * i;
        output += "\n";
    }
    return output;
}

console.log(showMultiplicationTable(7));

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(num) {
    return num % 2 === 0;
}

function returnEvenOddMessage(isEven, num) {
    return isEven(num) ? num + " is even" : num + " is odd";
}

function displayRandomNumbers(generateRandomNumber, isEven, returnEvenOddMessage, numberOfRandoms, min, max) {
    var output = "";
    var random;
    for (var i = 1; i <= numberOfRandoms; i += 1) {
        random = generateRandomNumber(min, max);
        output += returnEvenOddMessage(isEven, random);
        output += "\n";
    }
    return output;
}

console.log(displayRandomNumbers(generateRandomNumber, isEven, returnEvenOddMessage, 10, 20, 200));

function displayNumPyramid() {
    var output = "";
    for (var i = 1; i <= 9; i += 1) {
        output += i.toString().repeat(i) + "\n";
    }
    return output;
}

console.log(displayNumPyramid());

function displayDecrease(max, min, jump) {
    var output = "";
    for (var i = max; i >= min; i -= jump) {
        output += i + "\n";
    }
    return output;
}

console.log(displayDecrease(100, 5, 5));