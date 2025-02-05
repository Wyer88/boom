const express = require("express");
const path = require("path");

const app = express();

// Serve static files from public
app.use(express.static(path.join(__dirname, "public")));

// Explicitly handle favicon.ico requests
app.get("/favicon.ico", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "favicon.ico"));
});

// const PORT = 3000;
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
