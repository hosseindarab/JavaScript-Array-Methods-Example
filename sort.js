const names = ['Florin', 'Ivan', 'Liam', 'Jai', 'Ali']

const sortedNames = names.sort()

console.log(sortedNames)




const numbers = [1, 2, 5, 8, 3, 5, 9, 5, 67, 3, 44]

const sortedNumbers = numbers.sort(comparison)

function comparison(a, b) {
    // returned value < 0 --> a comes first
    // returned value = 0 --> nothing changed
    // returned value > 0 --> b comes first

    return a - b
}

console.log(sortedNumbers)




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

// sorting objects base on numbers
const sortedObjectsBaseOnNumber = store.sort((a, b) => a.price - b.price)

console.log(sortedObjectsBaseOnNumber)

// sorting objects base on string

let compare = (a, b) => {

    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}

const sortedObjectsBaseOnString = store.sort(compare)

console.log(sortedObjectsBaseOnString)