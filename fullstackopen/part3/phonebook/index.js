const { request } = require("express");
const express = require("express");
const { token } = require("morgan");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(morgan((tokens, request, response) =>{
  tokens.method(request, response);
  tokens.url(request, response);
  tokens.status(request, response);
  tokens.res(request, response, 'content-length');
  tokens['response-time'](request, response);
  tokens.body(request, response);
  return [
    tokens.method(request, response),
    tokens.url(request, response),
    tokens.status(request, response),
    tokens.res(request, response, 'content-length'),
    '-',
    tokens['response-time'](request, response),
    'ms',
    tokens.body(request, response)
  ].join(' ')
}));
 
morgan.token("body", (req, res) => req.method === 'POST' ? JSON.stringify(req.body) : '');

let persons = [
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
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError" && error.kind === "ObjectId") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/info", (request, response) => {
  const date = new Date();
  response.send(`<p>Phonebook has info for ${persons.length} people</p>
    <p>${date}</p>`);
});

app.get("/api/persons/:id", (request, response, next) => {
  const id = request.params.id;
  const person = persons.find((person) => person.id === Number(id));

  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/persons/:id", (request, response, next) => {
  const id = request.params.id;
  persons = persons.filter((person) => person.id !== Number(id));
  response.status(204).end();
});

const generateId = () => Math.floor(Math.random() * 100000000) + 1;

app.post("/api/persons", (request, response, next) => {
  const { name, number } = request.body;

  if (!name || !number) {
    return response.status(400).json({
      error: "name and number are required",
    });
  }

  const foundPerson = persons.find((person) => person.name === name);

  if (foundPerson) {
    return response.status(400).json({
      error: "name must be unique",
    });
  }

  const person = {
    id: generateId(),
    name,
    number,
  };

  persons = persons.concat(person);
  response.json(person);
});

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});