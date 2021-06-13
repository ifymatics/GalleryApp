import { shallow } from "enzyme";
import moxios from "moxios";
import Gallery from "./Gallery";

describe("Image Component", () => {
  const wrapper = shallow(<Gallery />);
  const fakeData = {
    uri: "https://particleforward.com/api/challenge/assets/image4",
    set: "fe4cfedffdffffffff",
    id: "b034a9f6-5704-4c41-ace7-61ed844245b3",
  };
  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it("it fetches a single image object from server", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: { data: fakeData },
        })
        .then(() => {
          expect(wrapper.instance().state.data).toEqual(fakeData);
          done();
        });
    });
  });
  it("it fetches all the image object from server", () => {});
});
