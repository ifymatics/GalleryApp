require("dotenv").config();
const express = require("express");
const api = require("./db/db");

const galleryRouter = require("./routes/galleryRoutes");
const app = express();
app.use(express.json());

//Api end points
app.use("/api/gallery", galleryRouter);

const PORT = process.env.PORT || 5004;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
module.exports = { app };
