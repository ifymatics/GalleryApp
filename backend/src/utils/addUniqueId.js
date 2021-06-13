const { v4: uuid } = require("uuid");

const addUniqueId = (imgArray = []) => {
  let imageArray = [];
  for (let arr of imgArray) {
    const uniqueId = uuid();

    arr["id"] = uniqueId;
    imageArray.push(arr);
  }
  return imageArray;
};

module.exports = { addUniqueId };
