const numbers = [1, 2, 3, 4, 5]

const numbersDouble = numbers.map(double)

function double(value, index, arr) {
    return value * 2
}
console.log(numbersDouble)




const multiplyValueWithIndex = numbers.map(multiply)

function multiply(value, index, arr) {
    return value * index
}

console.log(multiplyValueWithIndex)



const products = [
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

const totalProductsValue = products.map(item => ({
    name: item.name,
    totalValue: item.price * item.count
})
)

console.log(totalProductsValue)



const strArr = ['1', '2', '3', '4']

const numbersArr = strArr.map(item => Number(item))

console.log(numbersArr)