let api = "https://jsonplaceholder.typicode.com/users"

fetch(api)
.then((rawData) => {
    return rawData.json();
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})