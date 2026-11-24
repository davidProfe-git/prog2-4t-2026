const express = require("express")
const cors = require("cors")
const router = require("./routes/router")
const app = express()
let port = 4000

app.use(cors())

app.use("/api",router)

app.listen(port, ()=>{
    console.log(`corriendo en el ${port}`)
})