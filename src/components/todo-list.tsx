import React, { useState } from 'react';
import { TodoItem } from './todo-item';

interface Todo {
    id: number;
    content: string;
    status: boolean;
}

export const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, { id: Date.now(), content: newTodo, status: false }]);
            setNewTodo('');
        }
    };

    const handleDeleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleToggleTodo = (id: number) => {
        setTodos(todos.map(todo => (
            todo.id === id ? { ...todo, status: !todo.status } : todo
        )));
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleAddTodo();
        }
    };

    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            <div className="new-todo">
                <input
                    type="text"
                    value={newTodo}
                    onChange={e => setNewTodo(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Add a new todo"
                />
                <button onClick={handleAddTodo}>Add</button>
            </div>
            <div className="todo-items">
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        content={todo.content}
                        status={todo.status}
                        onDelete={handleDeleteTodo}
                        onToggle={handleToggleTodo}
                    />
                ))}
            </div>
        </div>
    );
};