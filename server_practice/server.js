const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CRUD = create, read, update, delete
// this is a read(just reading the info being passed)
app.get("/api/welcome", (request, response) => {
  console.log("This is welcome API route");
  console.log(request);
  // you must respond! wont work without it
  response.send({message: "Welcome to our API"});
})

app.post("/api/welcome", (request, response) => {
  response.json({
    message: "The API is cool!", 
    requestBody: request.body
  })
  console.log(request.body);
})



app. listen(8000, () => console.log("You have successfully connected to port 8000"));