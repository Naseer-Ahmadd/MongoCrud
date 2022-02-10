
// var express = require('express')
// var bodyparser = require('body-parser')
// var app = express()

// app.use(bodyparser.json())

// var conn = require("./config/db_connection")
// var connection = conn.getConnection()
// connection.connect()
// var fetch = require('./fetch/fetch')

// var router = express.Router()
// router.get("/pro",(req,res)=>{

//     //fire querry
//     connection.query("select * from products",(err,recArray,fields)=>{
//         if(err)
//             res.json({'message':'error'})
//         else
//             // res.json(recArray)
//             console.log(recArray);
//     })
// })

// app.listen(8080);
// console.log('listening');


// import express and bodyparser and cors module
// var express = require('express')
// var bodyparser = require('body-parser')
// var cors = require('cors')

// //create rest object
// var app = express()

// //set json as MIME type
// app.use(bodyparser.json)

// //cliend not sending form data, it is encoding to json
// app.use(bodyparser.urlencoded({extended:false}))

// //enable CORS -> cros origin resourse sharing
// app.use(cors())

// //import fetch n insert, update and delete modules
// var fetch = require("./fetch/fetch")
// var insert = require("./insert/insert")
// var update  = require("./update/update")
// var remov = require("./delete/delete")

// //use above module

// app.use("/fetch",fetch)
// app.use("/insert",insert)
// app.use("/update",update)
// app.use("/delete",remov)

// app.listen(8080)

// console.log("listening")


//import express body-parser and cors modules
var express = require('express')
var bodyparser = require('body-parser')
var cors = require('cors')

var app = express()
let port = process.env.PORT || 8080

app.use(bodyparser.json())

app.use(bodyparser.urlencoded({extended:false}))

app.use(cors())
//import fetch insert update delete modules
var fetch = require("./fetch/fetch")
var insert = require("./insert/insert")
var update = require("./update/update")
var remov = require("./delete/delete")

app.use("/fetch",fetch)
app.use("/insert",insert)
app.use("/update",update)
app.use("/delete",remov)

app.listen(port,()=>{
    console.log("server listening to port no" + port)

})