import React from "react";
import { fireEvent, render } from "@testing-library/react"
import BoxList from "./BoxList";

// smoke test
test("renders without crashing", () => {
    render(<BoxList />)
})

// snapshot test
test("matches snapshot", () => {
    const {asFragment} = render(<BoxList />)
    expect(asFragment()).toMatchSnapshot()
})

// specialty tests - add/remove box functionality
// mock addBox
function addBox (boxList){
    const colorInput = boxList.getByPlaceholderText("Ex: red")
    const widthInput = boxList.getByPlaceholderText("Ex: 200")
    const heightInput = boxList.getByPlaceholderText("Ex: 150")

    // fill out form
    fireEvent.change(colorInput, {target:{value:"red"}});
    fireEvent.change(widthInput, {target: {value: "50"}});
    fireEvent.change(heightInput, {target: {value: "100"}});
    // submit form
    const btn = boxList.getByText("Make a box!");
    fireEvent.click(btn)
}
test("should add new box", () => {
    const boxList = render(<BoxList />)

    addBox(boxList)

    expect(boxList.container.querySelector('.Box')).toBeInTheDocument();

    const deleteBtn = boxList.getByText("X")
    expect(deleteBtn).toBeInTheDocument();
    expect(deleteBtn.previousSibling).toHaveStyle(`
    width: 50px; height: 100px; background-color: rgb(255, 0, 0)`)
})

test("should remove a box", () => {
    const boxList = render(<BoxList />)
    addBox(boxList);

    const removeBtn = boxList.getByText('X');
    const box = removeBtn.previousSibling;

    // click to remove box
    fireEvent.click(removeBtn);
    expect(removeBtn).not.toBeInTheDocument();
    expect(box).not.toBeInTheDocument()
})