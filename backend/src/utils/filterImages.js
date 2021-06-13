const filterImages = (obj = {}) => {
  const imageArray = [];
  if (Object.keys(obj).includes("images")) {
    return obj.images;
  }
  return imageArray;
};
module.exports = { filterImages };
