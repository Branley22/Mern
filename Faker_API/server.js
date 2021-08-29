// Create a new project folder "Faker_API" and with your terminal, navigate into your new folder
// Create a package.json file using the "npm init -y" command in your terminal
// install express and faker
// Create a server.js file
// In your server.js file, Import express and faker
// Create 2 functions: createUser, createCompany that return an object with the properties listed above
// Create an api route "/api/users/new" that returns a new user
// Create an api route "/api/companies/new" that returns a new company
// Create an api route "/api/user/company" that returns both a new user and a new company
// Run your server.js file using nodemon
// Using Postman, test your new GET routes


const express = require("express");
const faker = require("faker");
const app = express();

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));


const createUser = () => {
  return {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  phoneNumber: faker.phone.phoneNumber(),
  email: faker.internet.email(),
  password: faker.internet.password()
  }
}

const createCompany = () => {
  return {
    companyName: faker.company.companyName(),
    // used an object to group all address data together
    address: {
      streetAddress: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    }
  }
}


app.get("/api/users/new", (req, res) => {
  const newUser = createUser();
  console.log("new user:");
  console.log(newUser);

  // like a return statement
  // more consise would add all together - res.json(newUser());
  // Nothing to output to console but still send back same data
  res.json(newUser);
});


app.get("/api/companies/new", (req, res) => {
  const newCompany = createCompany();
  console.log("new company:");
  console.log(newCompany);

  res.json(newCompany);
});


app.get("/api/user/company", (req, res) => {
  const newUser = createUser();
  const newCompany = createCompany();

  console.log("new user:");
  console.log(newUser);

  console.log("new company:");
  console.log(newCompany);

  res.json({ user: newUser, company: newCompany });
});




app.listen(8000, () => console.log("Listening on port 8000"));
