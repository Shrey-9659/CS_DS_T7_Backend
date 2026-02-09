let btn = document.getElementById("btn")
let input = document.getElementById("input")
let box = document.getElementById("box")


btn.addEventListener("click", () => {
    let api = `http://api.weatherapi.com/v1/current.json?key=e884e49500a94e69811163154241309&q=${input.value}`
    fetch(api)
    .then(rawData => rawData.json())
    .then(response => {
        box.innerText = response.current.temp_c
})
    .catch(error => console.log(error))
})

