import React, { useState } from "react";
import "./Todo.css";

/**
 * Component Todo
 * Props: task
 */

function Todo({task, removeTodo}){
    const [isDone, setIsDone] = useState(false);

    function addStrikethrough(){
        setIsDone(!isDone);
    }

    return(
        <div className = "Todo-group">
            <li className={`Todo-task ${isDone ? "task-done" : ""}`}>
                {task}
            </li>
            <button className="Todo-btn" onClick = {removeTodo}>Delete</button>
            <button className="Todo-btn done-btn"
                    onClick = {addStrikethrough}>   
                    Mark as done
            </button>
        </div>
    )
}

export default Todo;