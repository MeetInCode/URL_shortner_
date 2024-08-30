//Contains the business logic for handling requests and interacting with the model.import ShortUniqueId from "short-unique-id";
import URL from "../models/model.js";
import ShortUniqueId from "short-unique-id";

async function handlegenerateNewShortUrl(req, res) {
  try {
    const body = req.body;

    // Log the request body to check what is being received
    console.log("Request body:", body);

    // Handle missing URL
    if (!body.url) {
      return res.status(400).json({ error: "url is required" });
    }
    console.log("hi");
    // Instantiate ShortUniqueId
    const uid = new ShortUniqueId({ length: 10 });

    // Saves the new URL entry to the database.
    const newUrl = await URL.create({
      shortId: uid.rnd(),
      redirectUrl: body.url,
      visitHistory: [],
    });
    const allurls = await URL.find({});
    // Respond with the new short ID
    return res.render("homepage",{
      id: newUrl.shortId,
      urls:allurls,
    });
    // return res.json({ id: newUrl.shortId });
  } catch (error) {
    // Handle unexpected errors
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function handlegetrquest(req, res) {
  console.log("hi");
  const shortId = req.params.shortid;
  console.log(shortId);
  const entry = await URL.findOneAndUpdate(
    {
      shortId, //find one
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        }, //update this
      },
    }
  );
  console.log(entry);
  res.redirect(entry.redirectUrl);
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortid;
  const result = await URL.findOne({ shortId });
  console.log(result);
  return res.json({
    totalclicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}
export { handlegenerateNewShortUrl, handlegetrquest, handleGetAnalytics };
