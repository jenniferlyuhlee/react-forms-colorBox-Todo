import React from "react";
import { fireEvent, render } from "@testing-library/react"
import TodoList from "./TodoList";
import { expect } from "vitest";

// smoke test
test("renders without crashing", () => {
    render(<TodoList />)
});

// snapshot test
test("matches snapshot", () => {
    const {asFragment} = render(<TodoList />)
    expect(asFragment()).toMatchSnapshot()
})

// specialized tests - add/remove Todo functionality
// mock addTodo
function addTodo(todoList) {
    const taskInput = todoList.getByLabelText("I need to:");
    // fill out form
    fireEvent.change(taskInput, {target: {value: "Test task"}});
    // submit form
    const btn = todoList.getByText("Add!")
    fireEvent.click(btn)
}

test("should add new todo", () => {
    const todoList = render(<TodoList />)
    addTodo(todoList)

    expect(todoList.container.querySelector('.Todo-group')).toBeInTheDocument();

    const deleteBtn = todoList.getByText("Delete");
    expect(deleteBtn).toBeInTheDocument();
    const task = deleteBtn.previousSibling;
    expect(task).toHaveClass("Todo-task");
    expect(task).toHaveTextContent("Test task");
    
})

test("should delete a todo", () => {
    const todoList = render(<TodoList />)
    addTodo(todoList)

    const deleteBtn = todoList.getByText("Delete")
    const task = deleteBtn.previousSibling;
    expect(task).toBeInTheDocument();

    //click to remove Todo
    fireEvent.click(deleteBtn);
    expect(deleteBtn).not.toBeInTheDocument()
    expect(task).not.toBeInTheDocument()
})