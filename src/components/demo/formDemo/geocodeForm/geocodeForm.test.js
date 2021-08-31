import React from "react";
import { shallow } from "enzyme";
import GeocodeForm from "./geocodeForm";

describe("GeocodeForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<GeocodeForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
