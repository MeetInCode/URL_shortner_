//Defines the schema for the URL data and creates the model for database operations.

import mongoose from "mongoose";

//url schema is entire database
const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },

    redirectUrl: {
      type: String,
      required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
  },
  { timestamps: true }
);

const URL = mongoose.model("url", urlSchema); //here url is name of collection and urlschema is schema for that collection
// module.exports = URL;

export default URL;
