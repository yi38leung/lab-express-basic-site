const express = require("express");

const app = express();

app.use(express.static("public"));

// home page
app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home.html");
});

// about page
app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about-page.html");
});

// works page
app.get("/works", (request, response, next) => {
  response.sendFile(__dirname + "/views/works-page.html");
});

app.listen(3003, () => {
  console.log("server listening on port 3003");
});
