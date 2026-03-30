const express = require("express")
const path = require("path")
const users = require("./user.json")

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

// API Creation

app.get("/api/users", (req, res) => {
    res.json(users)
})

// Dynamic Routing
app.get("/api/users/:id", (req, res) => {
    const userId = parseInt(req.params.id)
    console.log(userId)
    // const providedUser = users.filter((user) => {
    //     return userId === user.id
    // })
    if(isNaN(userId)){
        res.json({
            success : false,
            msg : "invalid user ID"
        })
    }else{
        const providedUser = users.find((user) => {
        return userId === user.id
    })
        if(!providedUser){
            res.json({
                success : false,
                msg : "User not found"
            })
        }else{
            res.json(providedUser)
        }
    }
})

app.listen(3000, () => {
    console.log("Server Started...")
})


// res.send() -- to send data
// res.sendFile() -- to send file
// res.json() -- to send JSON data