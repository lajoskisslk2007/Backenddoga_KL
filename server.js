import express from 'express';
import dotenv from 'dotenv';
import db from './db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("GET/api/autok" ,async=>{
    try{
        app(200,message("jo"))    
    }
    catch{
        error(500 ,message("hiba"))
    }
})