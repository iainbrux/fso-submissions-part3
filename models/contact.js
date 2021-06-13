const mongoose = require("mongoose");
// eslint-disable-next-line no-unused-vars
const uniqueValidator = require("mongoose-unique-validator");

const URL = process.env.MONGODB_URI;

console.log(`Connecting to ${URL}`);

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB: ", error.message);
  });

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    unique: true
  },
  number: {
    type: Number,
    required: true,
    min: [9999999, "Please enter a contact number of 8 digits or longer"]
  }
});

const Contact = mongoose.model("Contact", contactSchema);

contactSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = Contact;