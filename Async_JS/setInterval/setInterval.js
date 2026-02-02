// setInterval(callback function, timeInMS)

let eachSecond = setInterval(() => {
    console.log("I will run after every one second...")
}, 1000)

setTimeout(() => {
    clearInterval(eachSecond)
}, 2000)