import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.envDB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_DATABASE}`;

const db = mongoose.connection;

export default mongoURI;
