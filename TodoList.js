import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');

    const addTask = () => {
        if (newTaskTitle.trim() !== '' && newTaskDescription.trim() !== '') {
            setTasks([...tasks, { title: newTaskTitle, description: newTaskDescription, completed: false }]);
            setNewTaskTitle('');
            setNewTaskDescription('');
        }
    };

    const toggleTaskCompletion = (index) => {
        const updatedTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((task, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="todo-list">
            <h1>To-Do List</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <input
                    type="text"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    placeholder="Task Title"
                />
                <button className="add-button" onClick={addTask}>Add</button>
            </div>
            <textarea
                value={newTaskDescription}
                onChange={(e) => setNewTaskDescription(e.target.value)}
                placeholder="Task Description"
            />
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className={task.completed ? 'completed' : ''}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTaskCompletion(index)}
                        />
                        <div>
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                        </div>
                        <button className="delete-button" onClick={() => deleteTask(index)}>×</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
