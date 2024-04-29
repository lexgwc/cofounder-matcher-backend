// Import envs
import dotenv from 'dotenv/config.js';

// Import modules
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// Import database connection


app.use(cors());


 

const app = express();


app.get("/", (req, res)=>{
  console.log("hello world")
})


const PORT = process.env.PORT || 3000

app.listen(PORT, )


