import mongoose from "mongoose";
import mongoURI from "./db.mjs";

const handler = async (event, context) => {
  try {
    mongoose.connect(mongoURI);

    const { first_name, last_name, email, message } = JSON.parse(event.body);

    if (!first_name || !last_name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid data format" }),
      };
    }

    const newContact = new Contact({ first_name, last_name, email, message });
    await newContact.save();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message received" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  } finally {
    await mongoose.disconnect();
  }
};

export default handler;
