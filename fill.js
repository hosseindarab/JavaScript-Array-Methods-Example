const numbers = [1, 2, 3, 4, 5, 6]

numbers.fill(0)

console.log(numbers)



function fillNumbers(n) {
    return Array(n).fill(0).map((_, index) => index + 1)
}

console.log(fillNumbers(5))