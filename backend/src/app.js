const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const corsOptions = {
  origin: "http://localhost:8080",
};

app.use('/', cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/usuarioController')(app);

app.listen(3000, (error) => {
  if (error) throw error;
  console.log("Server running on port: 3000");
});
