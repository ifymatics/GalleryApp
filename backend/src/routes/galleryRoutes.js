const express = require("express");
const {
  fetchGallery,
  fetchImage,
} = require("../controllers/GalleryController");

const router = express.Router();
router.get("/", fetchGallery);
router.get("/:imageId", fetchImage);

module.exports = router;
