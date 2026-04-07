const express = require("express")
const path = require("path")
const fs = require("fs")

const HomePage = path.join(__dirname, "/views/HomePage/index.html")
const FormPage = path.join(__dirname, "/views/RegistrationPage/index.html")
const SubmitPage = path.join(__dirname, "/views/SubmittedPage/index.html")

const app = express()

// MIDDLEWARE
app.use(express.json()) // to extract JSON data
app.use(express.urlencoded({extended : true})) // to extract form data

// Home page
app.get("/", (req, res) => {
    res.sendFile(HomePage)
})

// Form Page
app.get("/home/form", (req, res) => {
    res.sendFile(FormPage)
})

// Submit Page
app.get("/home/submit", (req, res) => {
    res.redirect("/home/form")
})
app.post("/home/submit", (req, res) => {
    console.log(req.body)
    // res.json({
    //     success : true,
    //     msg : "User added successfully",
    //     user : req.body
    // })
    fs.readFile(SubmitPage, "utf-8", (err, data) => {
        if(err) console.log(err)
            else{
                // data.replace(oldText, newText)
                const newData = data
                .replace("{firstName}", req.body.firstName)
                .replace("{lastName}", req.body.lastName)
                .replace("{email}", req.body.email)
                .replace("{title}", req.body.jobTitle)
                res.send(newData)
            }
    })
    // res.sendFile(SubmitPage)
})

app.listen(3000, () => {
    console.log("Server started...")
})


// CLIENT ---M1----M2--->SERVER