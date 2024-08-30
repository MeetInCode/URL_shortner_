//Defines the API routes and associates them with controller functions.

import express from "express";
import { handlegenerateNewShortUrl } from "../controllers/controllers.js";
import { handleGetAnalytics } from "../controllers/controllers.js";
import { handlegetrquest } from "../controllers/controllers.js";
const router = express.Router();

router.post("/", handlegenerateNewShortUrl);
// Route POST requests to /url/ to the controller function

router.get("/:shortid", handlegetrquest);

router.get("/analytics/:shortid", handleGetAnalytics);
export default router;
//Exports the router to be used in index.js.
