let userAPI = "https://jsonplaceholder.typicode.com/users"

fetch(userAPI)
.then((data) => {
    return data.json()
})
.then((response) => {
    console.log(response)
})
.catch((error) => console.log(error))


// https://jsonplaceholder.typicode.com/posts