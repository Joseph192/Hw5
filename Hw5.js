function isArray(input) {
    return Array.isArray(input)
}
console.log(isArray(35))

function joinArray(input) {
    join = input.join('$')
    return join
}
console.log(joinArray(['orange', 'apple', 'grape']))

function index(input, number) {
    var i
    for (i = 0; i < input.length; i++) {
        if (input[i] === number) {
            return `Index of ${number} is ${i}`
        }
    }
}
console.log(index([1, 2, 3, 4, 5], 5))
console.log(index([1, 2, 3, 4, 5, 6], 2))

function sum(input) {
    let sum = 0;
    for (var i = 0; i < input.length; i++) {
        sum += input[i];
    }
    return sum
}
console.log(sum([1, 2, 3, 4, 5]))

function product(input) {
    let product = 1
    for (var i = 0; i < input.length; i++) {
        product = product * input[i];
    }
    return product
}
console.log(product([1, 2, 3, 4, 5]))

function range(start, end) {
    let numbers = []
    for (let i = start; i <= end; i++) {
        numbers.push(i)
    }
    return numbers
}
function leap(start, end) {
    let leap_years = []
    let years = range(start, end)
    for (let i = 0; i < years.length; i++) {
        if (years[i] % 4 === 0) {
            leap_years.push(years[i])
        }
    }
    return leap_years
}
console.log(leap(2000, 2018))
console.log(leap(2013, 2015))

function fibonacci(input) {
    let storage = [0, 1]
    let number = 1
    let number_copy = 1
    for (i = 1; i < input; i++) {
        number_copy = number
        storage.push(number_copy)
        storage.reverse()
        storage.pop()
        storage.reverse()
        number = sum(storage)
    }
    return number
}
console.log(fibonacci(9))