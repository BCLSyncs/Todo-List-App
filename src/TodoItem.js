import React from 'react';

// Building a Function on a different file
function TodoItem({ todo, onDelete, onToggle }) {
    return (
        <div className="todo-item">
            <span
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                onClick={() => onToggle(todo.id)}
            >
                {todo.text}
            </span>
            <div>
                <button onClick={() => onToggle(todo.id)}>
                    {todo.completed ? 'Undo' : 'Done'}
                </button>
                <button onClick={() => onDelete(todo.id)}>Delete</button>
            </div>
        </div>
    );
}

export default TodoItem;
