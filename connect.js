//Defines and exports the connecttomongodb function to connect to the MongoDB server.

import mongoose from "mongoose"; // Use `import` instead of `require`

async function run(url) {
  return mongoose.connect(process.env.url);
}

export { run }; // Use `export` to match ES module syntax
