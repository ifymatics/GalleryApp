import { expect } from "chai";

import { addUniqueId } from "./addUniqueId";

describe("getImages - Basic functionalities", () => {
  it("returns an empty array when empty array is passed to it", () => {
    const expected = [];
    const actual = addUniqueId([]);
    expect(actual).to.deep.equal(expected);
  });

  it("returns an array of objects with unique IDs when an array of objects without ID is passed to it", () => {
    const actual = addUniqueId([{ uri: "" }]);

    expect(actual[0]).to.have.all.keys("id", "uri");
    // expect(actual[0]).to.have.property("id");
  });
});
