const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const cors = require('cors')

connectDb();
const app = express();

const port = process.env.PORT || 1001;

app.use(cors())
app.use(express.json());
app.use("/api/contact", require("./route/contactRouter"));
app.use("/api/user", require("./route/userRouter"));
app.use(errorHandler);


app.listen(port, ()=>{
    console.log("i am runing on port", port)
});