const express = require("express")
const app = express()
const router = require("./routes/user")

require("dotenv").config();
const port = process.env.PORT || 7000;

var cors = require('cors')

app.use(cors(
    {
        origin:"http://localhost:5173",
        optionsSuccessStatus:200
    }
))

require("./config/db").dbconnect()
app.use(express.json())
app.use("/api/v1",router);


app.listen(port,()=>{
    console.log("Server is running on port",port);
})

app.get( (req,res)=>{
    res.send(
        `<h1>Hi! their, How are you</h1>`
    )
})

