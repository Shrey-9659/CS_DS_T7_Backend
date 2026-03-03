const http = require("http")
const fs = require("fs")
const url = require("url")

const app = http.createServer((req, res) => {
    if(req.url != "/favicon.ico"){
    // Date
    const myDate = new Date()
    // console.log(myDate.toLocaleTimeString())
    // Req
    const myUrl = url.parse(req.url)
    // console.log(myUrl.pathname)

    // IP address
    // console.log(req.socket.remoteAddress)

    fs.appendFile("log.txt", `${myDate.toLocaleDateString()} ${myDate.toLocaleTimeString()} --> Req at : ${myUrl.pathname} --> Req coming from IP : ${req.socket.remoteAddress}\n`, (err, data) => {
        if(err) console.log(err)
    })

    res.end();
}
})

app.listen(3000, () => {
    console.log("Server Started...")
})