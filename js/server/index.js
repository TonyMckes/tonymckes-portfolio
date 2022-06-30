require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const QUERY = require("./api-query");
const PORT = process.env.PORT || 8000;
const API_TOKEN = process.env.API_TOKEN;
const API_URL = "https://api.github.com/graphql";
const OPTIONS = {
  body: JSON.stringify(QUERY),
  headers: { "Content-Type": "application/json", Authorization: API_TOKEN },
  method: "POST",
};

app.use(cors());

app.use(express.static(path.join(__dirname, "../../")));

app.get("/api", async (req, res, next) => {
  try {
    const response = await fetch(API_URL, OPTIONS);
    const { data } = await response.json();

    res.json(data.user.pinnedItems.nodes);
  } catch (error) {
    next(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
