import React from "react";
import { shallow } from "enzyme";
import ApiMenu from "./apiMenu";

describe("ApiMenu", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ApiMenu />);
    expect(wrapper).toMatchSnapshot();
  });
});
