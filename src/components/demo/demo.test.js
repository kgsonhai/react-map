import React from "react";
import { shallow } from "enzyme";
import Demo from "./demo";

describe("Demo", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Demo />);
    expect(wrapper).toMatchSnapshot();
  });
});
