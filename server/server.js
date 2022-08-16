const express = require("express");
const mongoose = require("mongoose");
const config = require("config");








const cors = require('cors');



const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

const app = express();
app.use(cors());
app.use(express.json());

const db = config.get("mongoURI");

mongoose
  .connect(db, options)
  .then(() => console.log("mongoDB connected..."))
  .catch((err) => console.log(err));

app.use("/api/items", require("./routes/api/items"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

const port = process.env.PORT || 5000;
app.listen(port,'192.168.1.10', () => console.log(`Server started on port${port}`));
