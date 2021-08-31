import React from "react";
import { shallow } from "enzyme";
import RasterForm from "./rasterForm";

describe("RasterForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<RasterForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
