//Express server handling

//Import node modules
var express = require("express");
var app = express();
var fs = require("fs");

//Get the path of the server and host a static
var path = require("path");
const dir = path.join(__dirname, "public");
app.use(express.static(dir));

console.log("Static directory setup at: " + dir);

//Send the html file
app.get("/", function (req, res) {
  res.sendfile("webpage/index.html");
});

//Send the game file
app.get("/js", function (req, res) {
  const page = fs.readFileSync("main.js", "utf8");
  res.send(page);
});

//Get the objects (In JS form)
app.get("/objjs", function (req, res) {
  const page = fs.readFileSync("objects.js", "utf8");
  res.send(page);
});

//Standard Algoritims
app.get("/algo", function (req, res) {
  const page = fs.readFileSync("standardalgos.js", "utf8");
  res.send(page);
});

//Send the styling script - INVALID
app.get("/css.css", function (req, res) {
  console.log("css");
  const page = fs.readFileSync("public/style.css", "utf8");
  res.send(page);
});

app.get("/file", function (req, res) {
  res.sendfile("public/" + req.query.loc + "/" + req.query.name + ".txt");
});

//Host to port 8000
app.listen(8000, function () {
  console.log(
    "\n\x1b[1m\x1b[33mReactit! \x1b[0m\x1b[32mIs running on server: \x1b[34m\x1b[4mhttp://localhost:8000\x1b[0m\n"
  );
});
