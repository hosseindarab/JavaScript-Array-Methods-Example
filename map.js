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





const fruitBasket = {
    apple: 27,
    orange: 0,
    banana: 14
  }

const fruitsToGet = ['apple', 'orange', 'banana']

const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  
  const getNumFruit = fruit => {
    return sleep(1000).then(v => fruitBasket[fruit])
  }

  const forLoop = async _ => {
    console.log('Start')
  
    for (let index = 0; index < fruitsToGet.length; index++) {
      const fruit = fruitsToGet[index]
      const numFruit = await getNumFruit(fruit)
      console.log(numFruit)
    }
  
    console.log('End')
  }
  forLoop()

// const mapLoop = async _ => {
//     console.log('Start')

//     const promises = fruitsToGet.map(async fruit => {
//         const numFruit = await getNumFruit(fruit)
//         return numFruit
//     })

//     const numFruits = await Promise.all(promises)
//     console.log(numFruits)

//     console.log('End')
// }
