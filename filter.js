const numbers = [1, 2, 3, 4, 5, 6]

const even = numbers.filter(isEven)

function isEven(value) {
    return value % 2 == 0
}

console.log(even)


// filtering an array of objects.
const people = [
    {
        name: 'Hossein',
        age: 29
    },
    {
        name: 'Ali',
        age: 17
    },
    {
        name: 'Nima',
        age: 34
    },
]

const adults = people.filter(person => person.age >= 18)

console.log(adults)



// remove all the key values keys from an array
const duplicatedNumbers = [1, 2, 3, 4, 5, 6, 2, 3, 1]

const nums = duplicatedNumbers.filter((value,index,arr) => {
    return arr.indexOf(value) === index
})

console.log(nums)



