import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, editTask, deleteTask }) => {
    return (
        <div className="todo-list">
            {todos.map(todo => (
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    editTask={editTask} 
                    deleteTask={deleteTask} 
                />
            ))}
        </div>
    );
};

export default TodoList;
