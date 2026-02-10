// fetch("https://jsonplaceholder.typicode.com/users")
// .then(rawData => rawData.json())
// .then(res => console.log(res))
// .catch(err => console.log(err))
let fetchData = async () => {
    try {
       let rawData = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await rawData.json()
        console.log(data) 
    } catch (error) {
        console.log("error aa gaya")
    }
}

fetchData();