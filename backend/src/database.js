const mongoose=require("mongoose");

const URI=process.env.MONGODB_URI ?
process.env.MONGODB_URI :
"mongodb://localhost/databaseTest";


mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify:true
});

const connection =mongoose.connection;

connection.once("open",()=>{
    console.log("DB is connected");
})