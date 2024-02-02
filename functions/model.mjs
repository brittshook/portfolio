import mongoose from "mongoose";
const Schema = mongoose.Schema;
const model = mongoose.model;

const Contact = model(
  "Contact",
  new Schema({
    first_name: String,
    last_name: String,
    email: String,
    message: String,
  })
);

export default Contact;
