import { shallow } from "enzyme";
import Card from "./Card";

describe("Card Component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.exists()).toBe(true);
  });
});
