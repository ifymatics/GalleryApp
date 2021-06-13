import { expect } from "chai";
import { find, findById } from "./db";
import imagesDB from "./imagesDb";

describe("Db- Basic functionalities ", () => {
  it("returns all the images from Db", async () => {
    const expected = imagesDB;
    const actual = await find({});
    expect(actual).to.deep.eql(expected);
  });

  it("should return empty object  when given wrong or no image id", async () => {
    const expected = {};
    const actual = await findById("b034a9f6-5704-4c41-ace7-61ed844245b");
    expect(actual).to.deep.equal(expected);
  });

  it("should return one image  when given the image id", async () => {
    const expected = {
      uri: "https://particleforward.com/api/challenge/assets/image4",
      set: "fe4cfedffdffffffff",
      id: "b034a9f6-5704-4c41-ace7-61ed844245b3",
    };
    const actual = await findById("b034a9f6-5704-4c41-ace7-61ed844245b3");
    expect(actual).to.deep.equal(expected);
  });
});
