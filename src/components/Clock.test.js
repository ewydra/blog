import React from "react";
import MockDate from "mockdate";
import { shallow } from "enzyme";
import Clock from "./Clock";

jest.useFakeTimers();

describe("Clock", () => {
  it("should update clock every second", () => {
    MockDate.set(1597862770000);
    
    const component = shallow(<Clock />);

    expect(component.state("timestamp")).toEqual(1597862770000);

    MockDate.set(1597862771000);
    jest.advanceTimersByTime(1000);
    expect(component.state("timestamp")).toEqual(1597862771000);

    MockDate.set(1597862774000);
    jest.advanceTimersByTime(3000);
    expect(component.state("timestamp")).toEqual(1597862774000);
    expect(component).toMatchSnapshot();
  })
})
