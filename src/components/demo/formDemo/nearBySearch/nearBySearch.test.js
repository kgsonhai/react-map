import React from "react";
import { shallow } from "enzyme";
import NearBySearch from "./nearBySearch";

describe("NearBySearch", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NearBySearch />);
    expect(wrapper).toMatchSnapshot();
  });
});
