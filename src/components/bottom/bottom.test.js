import React from "react";
import { shallow } from "enzyme";
import Bottom from "./bottom";

describe("Bottom", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Bottom />);
    expect(wrapper).toMatchSnapshot();
  });
});
