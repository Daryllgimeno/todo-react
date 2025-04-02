import React, { useState } from "react";

const Form = ({ addTask }) => {
    const [taskInput, setTaskInput] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!taskInput.trim()) return;
        addTask(taskInput);
        setTaskInput("");
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input 
                type="text" 
                value={taskInput} 
                onChange={(e) => setTaskInput(e.target.value)} 
                placeholder="Add a new task"
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default Form;
