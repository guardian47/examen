const express = require("express");



const app = express();

app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true }));



app.listen(4000,()=>{
    console.log("Carlos Daniel Gutierrrez Novoa y si jalo");
});

