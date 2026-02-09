// map, filter, reduce, forEach

let arr1 = [1,2,3,4,5,6,7]
// let arr2 = [1, "shrey", true, null, undefined]
console.log(arr1)
// Map -> Used to perform some operation on each and every element of an array
let mappedArray = arr1.map((value) => {
    return value * 3;
});
// console.log(mappedArray)

// Filter -> Going to filter out the elements, if the condition satisfies, we will keep it, else push the values out.
let filterArray = mappedArray.filter((value) => {
    return value%2 == 0;
})
// console.log(filterArray)

// reduce - Going to perform operation on all the elements to return a single value

let reducedValue = filterArray.reduce((curr, acc) => {
    return curr + acc
}, 0)
// console.log(reducedValue)


let newArray = arr1.map((value) => {
    return value * 3
}).filter((value) => {
    return value%2 == 0;
}).reduce((acc, curr) => {
    return curr + acc
}, 0)
console.log(newArray)