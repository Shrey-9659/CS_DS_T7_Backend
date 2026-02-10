let box = document.getElementById("box")
let btn = document.getElementById("btn")
let api = "https://api.quotable.io/random"

// btn.addEventListener("click", () => {
//     fetch(api)
//     .then((rawData) => {
//         return rawData.json()
//     })
//     .then((response) => {
//         box.innerText = response.content
//     })
//     .catch((error) => console.log(error))
// })
btn.addEventListener("click", async () => {
    try{
        let rawData = await fetch(api)
        let data = await rawData.json()
        box.innerText = data.content
    }catch(error){
        console.log(error)
    }
    
})


