import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/tasks', { title, description })
            .then(() => navigate('/'))
            .catch(error => console.error("There was an error creating the task!", error));
    };

    return (
        <div>
            <h1>Add New Task</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Task Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Task Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default AddTask;
