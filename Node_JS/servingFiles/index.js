const http = require("http")
const fs = require("fs")
const app = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url == "/"){
        fs.readFile("index.html", "utf-8", (err, data) => {
            if(err) console.log(err)
                else{
                    res.end(data)
                }
        })
    }else if(req.url == "/style.css"){
        fs.readFile("style.css", "utf-8", (err, data) => {
            if(err) console.log(err)
                else res.end(data)
        })
    }
})

app.listen(3000, () => {
    console.log("Server Started...")
})