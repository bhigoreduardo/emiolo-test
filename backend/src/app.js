const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, (error) => {
  if (error) throw error;
  console.log("Server running on port: 3000");
});
