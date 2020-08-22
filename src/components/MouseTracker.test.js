import React from "react";
import { mount } from "enzyme";
import MouseTracker from "./MouseTracker";

describe("MouseTracker", () => {
  it("should track mouse position", () => {
    const component = mount(<MouseTracker render={(({ x, y }) => <span>{x}, {y}</span>)} />);
    const div = component.find("div");
    const node = div.getDOMNode();
    jest.spyOn(node, "getBoundingClientRect").mockReturnValue({ left: 100, top: 50 });
    div.simulate("mouseMove", { clientX: 220, clientY: 110 });
    expect(component.find("span").text()).toEqual("120, 60");
  })
})
