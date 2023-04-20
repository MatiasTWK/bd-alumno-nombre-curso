const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
const studentRoutes = require("./routes/student");
const courseRoutes = require("./routes/course");

//middlewares
app.use(express.json());

app.use(cors());
app.use("/", studentRoutes);
app.use("/", courseRoutes);

//cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//routes
app.get("/", (req, res) => {
  res.send("Tablas curso y nombres de usu");
});

//mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.log(err));

app.listen(port, () => console.log("Server is running on port", port));
