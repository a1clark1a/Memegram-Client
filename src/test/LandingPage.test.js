import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import LandingPage from "../LandingPage/LandingPage";

describe("Landing Page Component", () => {
  it("renders with no error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LandingPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
