import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-container">
      <h2>📌 My To-Do List</h2>
      <TodoList />
    </div>
  );
}

export default App;
