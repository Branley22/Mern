require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors({
  origin:'http://localhost:3000'
}))

require("./config/mongoose.config");
require("./routes/pet.routes")(app);

app.listen(process.env.MY_PORT, ()=>
console.log(`You have successfully connected to port ${process.env.MY_PORT}`));
console.log(process.env.MY_PORT)