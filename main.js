// 1. Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");
}


// 2. Count Characters
function countCharacters(str) {
    return str.length;
}


// 3. Capitalize Words
function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}


// 4. Find Maximum
function findMaximum(numbers) {
    return Math.max(...numbers);
}


// 4. Find Minimum
function findMinimum(numbers) {
    return Math.min(...numbers);
}


// 5. Sum of Array
function sumArray(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}


// 6. Filter Array
function filterArray(array, condition) {
    return array.filter(condition);
}


// 7. Factorial
function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }

    return number * factorial(number - 1);
}


// 8. Prime Number Check
function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}


// 9. Fibonacci Sequence
function fibonacci(terms) {
    let sequence = [];

    if (terms <= 0) {
        return sequence;
    }

    if (terms >= 1) {
        sequence.push(0);
    }

    if (terms >= 2) {
        sequence.push(1);
    }

    for (let i = 2; i < terms; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence;
}


// TESTS

console.log(reverseString("hello"));
console.log(countCharacters("hello"));
console.log(capitalizeWords("hello world"));
console.log(findMaximum([3, 8, 2, 10, 5]));
console.log(findMinimum([3, 8, 2, 10, 5]));
console.log(sumArray([1, 2, 3, 4, 5]));
console.log(filterArray([1, 2, 3, 4, 5], number => number > 2));
console.log(factorial(5));
console.log(isPrime(7));
console.log(fibonacci(10));