const express = require("express");
var bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");

// middlleware

app.unsubscribe(express.json()); //req.body
app.use(cors());

//Routes

// Register and login routes

app.use("/auth", require("./routes/jwtAuth"));
app.use("/dashboard", require("./routes/dashboard"));

app.listen(5000, () => {
  console.log("Server is running on port http://localhost:5000");
});
