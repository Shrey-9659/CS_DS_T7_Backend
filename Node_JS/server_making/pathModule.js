const http = require("http")
const path = require("path")

const location = "/Users/shreykhandelwal/Desktop/Shoolini/Sem 2/CS_DS_T7/Async_JS/Fetch_Weather_Project/index.html"

const app = http.createServer((req, res) => {
    const myPath = path.parse(location)
    console.log(myPath)
    res.end();
})

app.listen(3000, () => {
    console.log("Server started...")
})