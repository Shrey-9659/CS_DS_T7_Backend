const express = require("express")
const path = require("path")

const HomePage = path.join(__dirname, "/views/HomePage/index.html")
const FormPage = path.join(__dirname, "/views/RegistrationPage/index.html")

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
})

app.listen(3000, () => {
    console.log("Server started...")
})


// CLIENT ---M1----M2--->SERVER