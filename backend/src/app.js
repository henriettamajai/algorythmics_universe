const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoute = require("./routes/auth");
const app = express();
const db = require("./controllers/dbController");

app.use(
  cors({
    origin: "http://localhost:8080",
    credentials: true,
  })
);
app.use(bodyParser.json());
db.initDatabase();
app.use("/", authRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
