//static router handles all frontend things
import express from "express";
import URL from '../models/model.js'
const router = express.Router();

router.get("/", async(req,res) =>{
    const allurls = await URL.find({});
    return res.render("homepage",
        {
            urls:allurls,
        }
);
});

export default router;
