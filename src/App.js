import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoItem from "./components/TodoItem";
import "./App.css";


const App = () => {
    const getData = () => JSON.parse(localStorage.getItem("tasks")) || [];
    const [todos, setTodos] = useState(getData);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(todos));
    }, [todos]);

    const addTask = (text) => {
        if (!text.trim()) return;
        setTodos([...todos, { id: Date.now(), text }]);
    };

    const editTask = (id, newText) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, text: newText } : todo
        ));
    };

    const deleteTask = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <>
            <Form addTask={addTask} />
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    editTask={editTask}
                    deleteTask={deleteTask}
                />
            ))}
        </>
    );
};

export default App;
