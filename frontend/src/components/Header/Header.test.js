import { shallow } from "enzyme";
import Header from "./Header";

describe("Header Component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });
});
