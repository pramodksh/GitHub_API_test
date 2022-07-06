const express = require('express')
const cors = require('cors')


const app = express()
// const constants = require('./constants')
const middlewares = require('./middlewares')
const router = require('./routes')

app.use(cors())
app.use(express.json())
app.use(middlewares.setHeaders)
app.use('/github_api', router);    

app.get('/', function(req, res){
    res.send("Hello World!!!")
})

app.listen(8080,()=>console.log("Running on port 8080 "))