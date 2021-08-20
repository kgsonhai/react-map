import React from "react";
import { shallow } from "enzyme";
import AutosugestForm from "./autosugestForm";

describe("AutosugestForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AutosugestForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
