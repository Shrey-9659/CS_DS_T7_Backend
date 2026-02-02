// setTimeout(callback function, timeInMS)
// console.log("first") 
// console.log("second")
// setTimeout(() => {
//     console.log("second")
// }, 0)
// console.log("third")
setTimeout(() => {
    console.log("I will run after one second...")
}, 1000)
let secondTimeout = setTimeout(() => {
    console.log("I will run after two second...")
}, 2000)
setTimeout(() => {
    console.log("I will run after three second...")
}, 3000)
// clearTimeout(reference)
clearTimeout(secondTimeout);