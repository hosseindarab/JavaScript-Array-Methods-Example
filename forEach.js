const numbers = [1, 2, 3, 4, 5]

numbers.forEach(items => {
    console.log(items)
})



numbers.forEach(consoleItem)

function consoleItem(item, index, arr) {
    console.log('a[' + index + '] = ' + item)
}



let sum = 0

numbers.forEach(item => {
    sum += item
})
console.log(sum)



const letters = ['a', 'b', 'c', 'a', 'b', 'c', 'a', 'd']

let count = {}

letters.forEach(item => {
    if (count[item]) {
        count[item]++
    } else {
        count[item] = 1
    }
})
console.log(count)