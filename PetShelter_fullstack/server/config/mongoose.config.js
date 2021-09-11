const mongoose = require("mongoose");
const dbName = "pets";

mongoose.connect("mongodb://localhost/" + dbName,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

.then(()=> {
  console.log(`You have connected to the ${dbName} name`);
})
.catch((err)=>{
  console.log(`error connecting to the ${dbName} name`);
  console.log(err);
})