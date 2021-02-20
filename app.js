
let express = require("express")
let ourApp = express() 

ourApp.get('/', function(req, res) {
    res.send(`
    <form action="/answer" method="POST">
        <p>What color is the sky on a clear and sunny day?</p>
        <input name="skyColor" autocomplete="off">
        <button>Submit Answer</button>
    </form>
    `)
    })

ourApp.listen(8080)











// let http = require("http")

// let ourApp = http.createServer(function(req, res) {
//     // console.log(req.url)
//     // res.end("Hello, and welcome to our website.")
//     if(req.url == "/") {
//         res.end("Hello, and welcome to our home page.")
//                 }
//     if(req.url == "/about") {
//         res.end("Thanks for the interest in our company")
//     }
//     res.end("We cannot find the page you are looking for. ")
// })

// ourApp.listen(3000)