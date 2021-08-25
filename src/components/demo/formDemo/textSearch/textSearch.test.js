import React from "react";
import { shallow } from "enzyme";
import TextSearch from "./textSearch";

describe("TextSearch", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TextSearch />);
    expect(wrapper).toMatchSnapshot();
  });
});
