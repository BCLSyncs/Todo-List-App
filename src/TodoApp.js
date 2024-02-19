// Imported the Necessary Files
import React, { useState } from 'react';
import TodoList from './TodoList';
import './TodoApp.css'; // 

// Building a function
function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    // Adding to do elements that were inputted 
    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
            setInputValue('');
        }
    };
    // Deleting Todo items
    const handleDeleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    // Toggle function
    const handleToggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    return (
        <div className="todo-list-container">
            <h1>To-Do List</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <TodoList todos={todos} onDelete={handleDeleteTodo} onToggle={handleToggleTodo} />
        </div>
    );
}

export default TodoApp;
