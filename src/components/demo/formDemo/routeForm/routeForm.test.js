import React from "react";
import { shallow } from "enzyme";
import RouteForm from "./routeForm";

describe("RouteForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<RouteForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
