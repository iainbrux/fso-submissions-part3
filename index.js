require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const Contact = require("./models/contact");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("build"));

morgan.token("data", (request, response) => {
  // return JSON.stringify(contacts);
});

app.use(
  morgan(":method :url :status :req[content-length] - :response-time ms :data")
);

app.get("/", (request, response) => {
  response.send("<h1>Contacts list</h1>");
});

app.get("/info", (request, response) => {
  const date = new Date();
  response.send(
    // `<p>Phonebook has info for ${contacts.length} people</p>
    `<p>${date}</p>`
  );
});

app.get("/api/persons", (request, response) => {
  Contact.find({}).then((contacts) => {
    response.json(contacts);
  });
});

app.get("/api/persons/:id", (request, response) => {
  const id = +request.params.id;
  Contact.findById(id)
    .then((contact) => response.json(contact))
    .catch((err) => {
      console.error(err.message)
      response.status(400).json({
        error: `Contact at id ${id} not found`
      })
    });
});

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.name) {
    return response.status(400).json({
      error: "name missing, please check that a name is given",
    });
  } else if (!body.number) {
    return response.status(400).json({
      error: "number missing, please check that a number is provided",
    });
  }

  const contact = new Contact({
    name: body.name,
    number: body.number
  });

  contact.save().then(savedContact => response.json(savedContact))
});

app.delete("/api/persons/:id", (request, response) => {
  const id = +request.params.id;
  // contacts = contacts.filter((contact) => contact.id !== id);
  response.status(204).end();
  console.log(`Contact with id ${id} has been deleted`);
});

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
