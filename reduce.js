// return the accumulated value of an array
const numbers = [1, 2, 3, 4]

const total = numbers.reduce(sum, 0)

function sum(accumulator, value) {
    return accumulator + value
}

console.log(total)




const newNumbers = [1, 2, 3, 4]

const max = newNumbers.reduce(callback, -Infinity)

function callback(accumulator, value) {
    if (accumulator > value) {
        return accumulator
    } else
        return value
}

console.log(max)



const store = [
    {
        name: 'Laptop',
        price: 2000,
        count: 5
    },
    {
        name: 'Desktop',
        price: 3000,
        count: 2
    },
    {
        name: 'Phone',
        price: 1000,
        count: 8
    }
]

const totalValueStore = store.reduce(
    (acc, item) => acc + (item.price * item.count), 0
)

console.log(totalValueStore)