import React, { useState } from 'react';

function TodoList() {
    const getData = () => JSON.parse(localStorage.getItem('tasks')) || [];
    const [tasks, Alltasks] = useState(() => getData());
    const [text, Userinput] = useState('');

    const createTask = (text) => ({
        id: Date.now(),
        text,
    });

    const addTask = () => {
        if (!text.trim()) return;

        Alltasks(prevTasks => {
            const updatedTasks = [prevTasks, createTask(text)];
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return updatedTasks;
        });

        Userinput('');
    };

    const EditTask = (id) => {
        const newText = prompt("Edit task:", tasks.find(task => task.id === id)?.text);
        if (!newText) return;

        Alltasks(prevTasks => {
            const updatedTasks = prevTasks.map(task =>
                task.id === id ? { ...task, text: newText } : task
            );
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return updatedTasks;
        });
    };

    const deleteTask = (id) => {
        Alltasks(prevTasks => {
            const updatedTasks = prevTasks.filter(task => task.id !== id);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return updatedTasks;
        });
    };

    return (
        <div className="todo-list">
            {tasks.map(task => (
                <div key={task.id} className="todo-item">
                    <span>{task.text}</span>
                    <button onClick={() => EditTask(task.id)}>Edit</button>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
            ))}
            <div className="input-container">
                <input value={text} onChange={(e) => Userinput(e.target.value)} placeholder="Add a new task" />
                <button onClick={addTask}>Add Task</button>
            </div>
        </div>
    );
}

export default TodoList;
