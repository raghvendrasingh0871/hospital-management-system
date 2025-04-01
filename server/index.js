import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();

const app = express();
const PORT=process.env.PORT;

// middlewares
app.use(express.json());
app.use(cors());

// routes


app.listen(PORT,()=>{

});