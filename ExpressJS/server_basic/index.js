const express = require("express")
const path = require("path")

const aboutPageFileLocation = path.join(__dirname, "public/index.html")

const app = express()

// serverName.methodName("/route", callBackFunction/req handler)
app.get("/", (req, res) => {
    res.send("I am on home page")
})
app.get("/about", (req, res) => {
    res.sendFile(aboutPageFileLocation)
})

app.get("/contact", (req, res) => {
    res.json({success : "True", info : "No info found"})
})

app.listen(3000, () => {
    console.log("Server Started...")
})


// res.send() -- to send data
// res.sendFile() -- to send file
// res.json() -- to send JSON data