const express = require('express')
const dotenv = require('dotenv')

const app = express()
dotenv.config()
app.get('/',(req,res)=>{
    res.send("API is running")
})

//app.get()
const PORT = process.config.PORT || 4000

app.listen(PORT,console.log(`Server started on port ${PORT}`))