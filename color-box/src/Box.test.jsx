import React from "react";
import { render } from "@testing-library/react"
import Box from "./Box";

// smoke test
test("it renders without crashing", () => {
    render (<Box color="red" width={100} height={100} />)
});

// snapshot test
test("it matches snapshot", () => {
    const {asFragment} = render(<Box color="red" width={100} height={100} />)
    expect(asFragment()).toMatchSnapshot();
})