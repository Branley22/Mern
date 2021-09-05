const express = require("express");
// allows us to get info from the front end
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors({
  origin: "http://localhost:3000"
}))

require("./config/mongoose.config");
require("./routes/product.routes")(app);


app.listen(8000, () => console.log("You have successfully connected to port 8000"));
