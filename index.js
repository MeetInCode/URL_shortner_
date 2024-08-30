//This file initializes the Express application, connects to the MongoDB database, and sets up routing

import express from "express";
import * as path from "path";

import urlRoute from "./routes/routes.js";
import staticrouter from "./routes/staticrouter.js";
import { connecttomongodb } from "./connect.js";

const app = express();
const port = 3000;

//connect to db
connecttomongodb("mongodb://localhost:27017/shorturl").then(() =>
  console.log("mongodb connected")
);
// app.get("/", (req, res) => res.send("Hello World!"));
app.set("view engine", "ejs");
app.set("views", path.resolve("./views")); 
app.use(express.json());  //middleware to acept json data
   
app.use(express.urlencoded({extended:false})); //middleware to accept form data
//routing setup
//Applies route handlers for the /url path using urlRoute from routes.js.
app.use("/url", urlRoute);
app.use("/", staticrouter);
// Route requests starting with /url to routes.js

// app.get("/", async (req, res) => {
//   const allurls = await URL.find({})
//   return res.render("homepage",{
//     urls: allurls,
//     name: 'meet'
//   });
// });

app.listen(port, () =>
  console.log(`Example app listening on port ${port} http://localhost:${3000}`)
);
