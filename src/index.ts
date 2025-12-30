import express from "express";
import cors from 'cors';
import app from "./app";

const server = express();
const PORT = 3000;
const application = app

server.use(application);


app.listen(PORT, () =>{
    console.log(`Rodando em http://localhost:${PORT}`)
})