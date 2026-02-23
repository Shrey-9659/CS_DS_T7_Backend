const http = require("http")
const fs = require("fs")

const app = http.createServer((req, res) => {
    // Writing in a file - Sync
    fs.writeFileSync("sync.txt", "Writing in a file - sync")
    // Writing in a file - Async
    fs.writeFile("async.txt", "Writing in a file - Async", (err, data) => {
        if(err) console.log("File writing failed")
            else console.log("File writing success")
    })
})

app.listen(3000, () => {
    console.log("Server running...")
})