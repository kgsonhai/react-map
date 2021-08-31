import React from "react";
import { shallow } from "enzyme";
import Import from "./import";

describe("Import", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Import />);
    expect(wrapper).toMatchSnapshot();
  });
});
