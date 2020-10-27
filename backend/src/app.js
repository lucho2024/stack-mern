const express = require("express");
const cors=require("cors")
const app= express();
//settings
app.set("port",process.env.PORT||2000);


//middleware
app.use(cors());  
app.use(express.json());

//routes
app.use(`/users`,require("./routes/users"));
app.use(`/notes`,require("./routes/notes"));

module.exports=app;
