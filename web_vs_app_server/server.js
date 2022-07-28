const http = require('http')

http.createServer((req,res)=> {
    const response = require('./public/script.js')
    res.write(response +"")
    res.end()
}).listen(8000) 