import React from "react";
import { render } from "@testing-library/react"
import App from "./App";

// smoke test
test("it renders without crashing", () => {
    render (<App />)
});

// snapshot test
test("it matches snapshot", () => {
    const {asFragment} = render(<App />)
    expect(asFragment()).toMatchSnapshot();
})