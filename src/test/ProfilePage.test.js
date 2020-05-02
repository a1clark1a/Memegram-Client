import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ProfilePage from "../ProfilePage/ProfilePage";

describe("Image Page Component", () => {
  it("renders with no error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ProfilePage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
