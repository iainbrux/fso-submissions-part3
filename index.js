const express = require("express");
const morgan = require('morgan');

const app = express();

app.use(express.json());

let contacts = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-6423122",
  },
];

morgan.token('data', (request, response) => {
  return JSON.stringify(contacts)
})

app.use(morgan(':method :url :status :req[content-length] - :response-time ms :data'))

const maxID = () => {
  let id = Math.max(...contacts.map((c) => c.id));
  return id + 1;
};

app.get("/", (request, response) => {
  response.send("<h1>Contacts list</h1>");
});

app.get("/info", (request, response) => {
  const date = new Date();
  response.send(
    `<p>Phonebook has info for ${contacts.length} people</p>
    <p>${date}</p>`
  );
});

app.get("/api/persons", (request, response) => {
  console.log(JSON.stringify(contacts))
  console.log(contacts);
  response.json(contacts);
});

app.get("/api/persons/:id", (request, response) => {
  const id = +request.params.id;
  const contact = contacts.find((c) => c.id === id);
  if (!contact) {
    return response.status(404).end();
  }
  response.json(contact);
});

app.post("/api/persons", (request, response) => {
  const body = request.body;
  const contactExists = contacts.find(contact => body.name === contact.name)

  if (!body.name) {
    return response.status(400).json({
      error: "name missing, please check that a name is given",
    });
  } else if (!body.number) {
    return response.status(400).json({
      error: "number missing, please check that a number is provided",
    });
  } else if (contactExists) {
    return response.status(400).json({
      error: "That contact already exists in the phonebook. Please ensure the contact name is unique",
    });
  }

  const contact = {
    name: body.name,
    number: body.number,
    id: maxID(),
  };

  contacts = contacts.concat(contact);
  console.log(contacts)
  response.json(contact);
});

app.delete("/api/persons/:id", (request, response) => {
  const id = +request.params.id;
  contacts = contacts.filter((contact) => contact.id !== id);
  response.status(204).end();
  console.log(`Contact with id ${id} has been deleted`);
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
