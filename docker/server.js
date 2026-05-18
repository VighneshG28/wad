const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Docker Container Running!");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});


// docker build -t my-node-app .

// docker run -p 3000:3000 my-node-app

// docker ps