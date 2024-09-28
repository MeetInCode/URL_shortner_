//Defines and exports the connecttomongodb function to connect to the MongoDB server.

import mongoose from "mongoose"; // Use `import` instead of `require`

async function run(url) {
  return mongoose.connect(
    "mongodb+srv://meet:pass123@project1.tmtm0.mongodb.net/?retryWrites=true&w=majority&appName=project1"
  );
}

export { run }; // Use `export` to match ES module syntax
