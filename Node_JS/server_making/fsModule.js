const http = require("http")
const fs = require("fs")

const app = http.createServer((req, res) => {
    if(req.url != "/favicon.ico"){
    // console.log(fs)

    // Writing in a file - Sync
    // fs.writeFileSync("example.txt", "Writing using Sync Method")
    // Writing in a file - Async
    // fs.writeFile("example.txt", "Writing using Async Method", (err, data) => {
    //     if(err) console.log(err)
    //         else console.log("Writing successful...")
    // })

    // Reading a file - Sync
    // let readData = fs.readFileSync("example.txt", "utf-8")
    // console.log(`Sync - ${readData}`)

    // Reading a file - Async
    // fs.readFile("example.txt", "utf-8", (err, data) => {
    //     if(err) console.log(err)
    //         else console.log(`Async - ${data}`)
    // })

    // Appending in a file - Sync
    // fs.appendFileSync("example.txt", " -- Appended using Sync Method -- ")
    // Appending in a file - Async
    // fs.appendFile("example.txt", " -- Appended using Async Method -- ", (err, data) => {
    //     if(err) console.log(err)
    //         else console.log("Appended successful...")
    // })

    // Copying a file - Sync
    // fs.cpSync("example.txt", "copyFile.js")

    // Deleting a file - Async
    // fs.unlink("copyFile.js", (err, data) => {
    //     if(err) console.log(err)
    //         else console.log("Deleted successfully...")
    // })

    // Stats of a file - Sync
    const statData = fs.statSync("example.txt")
    console.log(statData)


    res.end("OK");
}
})

app.listen(3000, () => {
    console.log("Server running...")
})