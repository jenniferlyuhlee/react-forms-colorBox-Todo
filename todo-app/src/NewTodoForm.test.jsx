import React from "react";
import {fireEvent, render} from "@testing-library/react"
import NewTodoForm from "./NewTodoForm";

// smoke test
test("it renders without crashing", () => {
    render(<NewTodoForm />)
})

// snapshot test
test("it matches snapshot", () => {
    const {asFragment} = render(<NewTodoForm />)
    expect(asFragment()).toMatchSnapshot();
})