import request from "supertest";
import { app } from "../server";

describe("GET /api/gallery/:imageId", () => {
  it("responds with json of single image", (done) => {
    request(app)
      .get("/api/gallery/:imageId")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("GET /api/gallery", () => {
  it("responds with json of images array", (done) => {
    request(app)
      .get("/api/gallery")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
