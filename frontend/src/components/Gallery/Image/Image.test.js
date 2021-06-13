import { shallow } from "enzyme";
import Image from "./Image";

describe("Image Component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Image />);
    expect(wrapper.exists()).toBe(true);
  });
});
