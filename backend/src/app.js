const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoute = require("./routes/authRoute");
const courseRoute = require("./routes/courseRoute");
const profileRoutes = require("./routes/profileRoutes");
const app = express();
const {initDatabase} = require("./controllers/dbController");

app.use(
  cors({
    origin: "http://localhost:8080",
    credentials: true,
  })
);
app.use(bodyParser.json());
initDatabase();
app.use("/", authRoute);
app.use("/", courseRoute);
app.use("/", profileRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
