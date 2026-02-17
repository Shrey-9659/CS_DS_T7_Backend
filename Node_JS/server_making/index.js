const http = require("http")
const PORT = 3000;

const app = http.createServer((req, res) => {
    if(req.url == "/"){
        console.log("I am on home page")
    }else if(req.url == "/about"){
        console.log("I am on about page")
    }else{
        console.log("I am on some other page")
    }
});

app.listen(PORT, () => {
    console.log(("Server is running..."))
})