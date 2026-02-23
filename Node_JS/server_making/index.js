const http = require("http")
const PORT = 3000;
// res.write()
// res.end()

const app = http.createServer((req, res) => {
    if(req.url == "/"){
        console.log("I am on home page")
        res.write("I am on home page")
        res.end()
    }else if(req.url == "/about"){
        console.log("I am on about page")
        res.end("I am on about page")
    }else{
        console.log("I am on some other page")
        res.write("404 : Page Not Found - 01")
        res.write("404 : Page Not Found - 02")
        res.write("404 : Page Not Found - 03")
        res.end("404 : Page Not Found - 04")
        // res.end("404 : Page Not Found - 05")
        // res.end("404 : Page Not Found - 06")
    }
});

app.listen(PORT, () => {
    console.log(("Server is running..."))
})