import { expect } from "chai";
import { filterImages } from "./filterImages";
import { galleryMockData, dbMock } from "./mockData";

describe("filterImages - Basic functionalities", () => {
  it("returns an empty array when empty object is passed to it", () => {
    const expected = [];
    const actual = filterImages({});
    expect(expected).to.deep.equal(expected);
  });
  it("should return arrays of image objects when fed with an object containing array of images", () => {
    const expected = galleryMockData;

    const actual = filterImages(dbMock);
    expect(actual).to.deep.equal(expected);
  });
});
