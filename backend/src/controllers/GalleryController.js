const express = require("express");
const db = require("./../db/db");

const fetchGallery = async (req, res) => {
  const gallery = await db.find({});

  res.status(200).json(gallery);
};
const fetchImage = async (req, res) => {
  const { imageId } = req.params;

  const image = await db.findById(imageId);

  if (image) {
    res.status(200).json(image);
  } else {
    res.status(404).json({});
  }
};
module.exports = { fetchGallery, fetchImage };
