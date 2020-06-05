const express = require('express');
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
const keys= require("./config/keys");
const routes=require("./controller/api/todo");
const app = express();



//BODY-PARSER MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//ROUTES TO USE
app.use("/api/todo",routes);

//MONGO CONNECTION
mongoose.connect(

keys.mongoURI
, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
.then((res) => {
    console.log("Mongo Succesfully Connected")
}).catch((err) => {
    console.log(err)
});

//SERVER PORT
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
