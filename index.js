const express = require("express");
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

app.delete("/api/persons/:id", (request, response) => {
    const id = +request.params.id
    contacts = contacts.filter(contact => contact.id !== id)
    response.status(204).end();
    console.log(`Contact with id ${id} has been deleted`)
})

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
