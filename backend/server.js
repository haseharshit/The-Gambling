const express= require("express")
const app=express();
const mongoose= require("mongoose")
const dotenv= require("dotenv")
const routes=require("./routes/routes")
const cors= require("cors")
const path = require("path");
dotenv.config()
mongoose.connect(process.env.DBACCESS, ()=>console.log("DB Connected"))
mongoose.connection
.once('open', ()=>console.log("Connected"))
.on('error', (error)=>console.log(error))

app.use(express.json())
app.use(cors())
app.use("/app", routes)
app.listen(4000, ()=> console.log("Server Up"))

