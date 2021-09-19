const mongoose = require('mongoose');
const dbName = 'pirates';

mongoose.connect('mongodb://localhost/' + dbName,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

.then(()=>{
  console.log(`You have connected to the ${dbName} database`);
})
.catch(()=>{
  console.log(`error connecting to the ${dbName} name`);
  console.log(err);
})