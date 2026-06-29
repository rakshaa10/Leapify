const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const opportunityRoutes = require("./routes/opportunityRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/opportunities", opportunityRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Opportunity Hub API Running",
  });
});

module.exports = app;
