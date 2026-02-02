let time = document.getElementById("time")
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")
let stopwatch
let timer = 0;


start.addEventListener("click", () => {
    stopwatch = setInterval(() => {
        timer++
        time.innerHTML = `${timer}`
    }, 1000)
})
stop.addEventListener("click", () => {
    clearInterval(stopwatch)
})
reset.addEventListener("click", () => {
    clearInterval(stopwatch)
    timer = 0;
    time.innerHTML = "Timer : 0"
})