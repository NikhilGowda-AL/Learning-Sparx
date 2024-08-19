import express from "express";
import cors from "cors"; 
import mongoose from "mongoose";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import router from "./Routes/user.routes.js";
import path from "path";
dotenv.config();

var port = 4000;
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api/v1/login",router);


app.get("/",(req,res)=>{
    console.log("hello running");
});

app.listen(port,()=>{
    console.log(`server running successfully on ${port}`)
});