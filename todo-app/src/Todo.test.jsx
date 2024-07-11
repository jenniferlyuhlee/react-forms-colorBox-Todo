import React from "react";
import {fireEvent, render} from "@testing-library/react"
import Todo from "./Todo";

// smoke test
test("it renders without crashing", () => {
    render (<Todo task = "test"/>)
})

// snapshot test
test("it matches snapshot", () => {
    const {asFragment} = render(<Todo task = "test" />)
    expect(asFragment()).toMatchSnapshot();
})

// specialized test
test("strikethrough toggling works", () => {
    const {getByText} = render(<Todo task = "test" />);
    const doneBtn = getByText("Mark as done")
    const todo = getByText("test")
    
    expect(todo).not.toHaveClass("task-done")

    fireEvent.click(doneBtn)

    expect(todo).toHaveClass("task-done")
})