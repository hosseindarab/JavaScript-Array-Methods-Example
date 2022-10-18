// delete or add as many as element u want in an array. 
// splice(start_index, number of elements to be deleted, number of elements to be added) 
const numbers = [1, 2, 3, 4, 5]

 const deleted = numbers.splice(2, 0, 6 ,7)

console.log(numbers)
console.log(deleted)