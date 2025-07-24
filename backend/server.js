const express = require("express");
const cors = require("cors");
const contactRoute = require("./routes/contact");
const resumeRoute = require("./routes/resume");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoute);
app.use("/api/resume", resumeRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
