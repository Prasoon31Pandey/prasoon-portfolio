const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  const resumePath = path.join(__dirname, "..", "..", "public", "resume.pdf");
  res.download(resumePath, "resume.pdf");
});

module.exports = router;
