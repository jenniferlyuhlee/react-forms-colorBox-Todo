import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import NewTodoForm from "./NewTodoForm"; 
import Todo from "./Todo";

function TodoList() {
    const INITIAL_STATE = []

    const [todoList, setTodoList] = useState(INITIAL_STATE);

    const addTodo = (newTodo) => {
        setTodoList(todoList => [...todoList, {...newTodo, id:uuid()}])
    }

    const removeTodo = (id) => {
        setTodoList(todoList.filter(t => t.id != id));
    }

    return (
        <div>
            <h1>Todo List</h1>
            <NewTodoForm addTodo={addTodo} />
            <div className="Todos">
                {todoList.map(({task, id}) => <Todo
                                            task = {task}
                                            key = {id}
                                            removeTodo={() => removeTodo(id)}/>)}
            </div>
        </div>
    )
}

export default TodoList;