const express = require("express");

const app = express();

// middleware that allows data to be passed more easily through front/back end using json
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

require("./config/mongoose.config");
require("./routes/jokes.routes")(app);
// allows us to pass info from express over to routes 




app.listen(8000, () => console.log("You have successfully connected to port 8000"));