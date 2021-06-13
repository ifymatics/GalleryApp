const axios = require("axios");
const fs = require("fs");
const { addUniqueId } = require("./../utils/addUniqueId");
const { filterImages } = require("./../utils/filterImages");
const imagesDB = require("./imagesDb");

let gallery = [];
const api = async () => {
  const url = "https://particleforward.com/api/challenge/index.json";
  try {
    const imagesObj = await axios.get(url);
    gallery = addUniqueId(filterImages(imagesObj.data));
    fs.writeFile(
      "./backend/src/db/dbfile.js",
      JSON.stringify(gallery),
      (err) => {
        if (err) return console.log(err);
      }
    );
    return gallery;
  } catch (error) {
    console.log(error);
  }
};

const find = async () => {
  if (imagesDB) {
    return imagesDB;
  }

  return [];
};

const findById = async (id) => {
  let image = {};

  image = imagesDB.find((img) => img.id === id);
  if (image) return image;
  return {};
};

module.exports = { find, findById };
