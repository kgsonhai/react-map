import React from "react";
import { shallow } from "enzyme";
import From from "./from";

describe("From", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<From />);
    expect(wrapper).toMatchSnapshot();
  });
});
