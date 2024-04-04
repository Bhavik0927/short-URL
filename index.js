import express from "express";
import urlRoute from './router/url.js';
import { mongoDB } from "./Database/data.js";
import { URL } from "./model/Url.js";

const app = express();

mongoDB();

//middleware
app.use(express.json());

// Routes
app.use("/url", urlRoute);


app.listen(5000, () => {
    console.log("Listening at 5000")
})