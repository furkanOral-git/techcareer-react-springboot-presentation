import React from 'react';

interface TodoItemProps {
    id: number;
    content: string;
    status: boolean;
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ id, content, status, onDelete, onToggle }) => {
    return (
        <div className={`todo-item ${status ? 'completed' : ''}`} onClick={() => onToggle(id)}>
            <span className={`status-indicator ${status ? 'checked' : ''}`}></span>
            <span className="content">{content}</span>
            <button onClick={(e) => { e.stopPropagation(); onDelete(id); }}>Delete</button>
        </div>
    );
};