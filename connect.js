//Defines and exports the connecttomongodb function to connect to the MongoDB server.

import mongoose from "mongoose"; // Use `import` instead of `require`

async function connecttomongodb(url) {
  return mongoose.connect(url);
}

export { connecttomongodb }; // Use `export` to match ES module syntax
