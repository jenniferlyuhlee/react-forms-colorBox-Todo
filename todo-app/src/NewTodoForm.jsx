import React, { useState } from "react";
import "./NewTodoForm.css"

function NewTodoForm({addTodo}) {
    const [task, setTask] = useState("");

    const handleChange = e => {
        setTask(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        addTodo({task})
        setTask("");
    }

    return(
        <form className = "NewTodoForm" onSubmit = {handleSubmit}>
            <label className = "todo-label" htmlFor="task">I need to: </label>
            <input className = "todo-input"
                   id = "task" 
                   type = "text"
                   name = "task"
                   placeholder = "Ex: Wash dishes"
                   value = {task}
                   onChange = {handleChange}/>
            <button className ="NewTodoForm-btn">Add!</button>
        </form>
    )
}

export default NewTodoForm;