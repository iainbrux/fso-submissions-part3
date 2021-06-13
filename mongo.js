const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")

const password = process.argv[2];

const dbURI = `mongodb+srv://fullstack:${password}@cluster0.kgfql.mongodb.net/phonebook-app?retryWrites=true&w=majority`;

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: 7,
  },
  number: Number,
});

contactSchema.plugin(uniqueValidator)

const Contact = mongoose.model("Contact", contactSchema);

const contact = new Contact({
  name: process.argv[3],
  number: process.argv[4],
});

if (process.argv[3] && process.argv[4]) {
  contact.save().then((result) => {
    console.log(`added ${result.name} number ${result.number} to phonebook`);
    mongoose.connection.close();
  });
} else if (!process.argv[3] && !process.argv[4]) {
  console.log('phonebook:')
  Contact.find({}).then((contacts) => {
    contacts.forEach((contact) => {
      console.log(`${contact.name} ${contact.number}`);
      mongoose.connection.close();
    });
  });
} else {
    console.log('A full contact has not been specified.')
    console.log('Please ensure a name and number have been entered.')
    return process.exit(1);
}

module.exports = Contact