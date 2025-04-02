import React, { useState } from "react";

const TodoItem = ({ todo, editTask, deleteTask }) => {
    const [editingTask, setEditingTask] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () => {
        editTask(todo.id, newText);
        setEditingTask(false);
    };

    return (
        <div className="todo-item">
            {editingTask ? (
                <>
                    <input 
                        type="text" 
                        value={newText} 
                        onChange={(e) => setNewText(e.target.value)}
                    />
                    <button onClick={handleEdit}>Save</button>
                    <button onClick={() => setEditingTask(false)}>Cancel</button>
                </>
            ) : (
                <div>
                    <span>{todo.text}</span>
                    <button onClick={() => setEditingTask(true)}>Edit</button>
                    <button onClick={() => deleteTask(todo.id)}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default TodoItem;
