import { shallow } from "enzyme";
import App from "./App";

describe("App Component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
