import React from "react";
import { render, fireEvent } from "@testing-library/react"
import NewBoxForm from "./NewBoxForm";

// smoke test
test("renders without crashing", () => {
    render(<NewBoxForm />)
});

// snapshot test
test("matches snapshot", () => {
    const { asFragment } = render(<NewBoxForm />)
    expect(asFragment()).toMatchSnapshot();
})

