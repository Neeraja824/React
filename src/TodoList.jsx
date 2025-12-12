import { useState, useEffect } from "react";
import react from "react";
import './App.css';
const Todolist = () => {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);
    const handleChange = (e) => {
        setTask(e.target.value);
    }
    const addTask = () => {
        if (task !== "") {
            const taskDetails = {
                id: Math.floor(Math.random() * 1000),
                value: task,
                isCompleted: false,
            };
            setTaskList([...taskList, taskDetails]);
        }
        setTask("");
    }
    const deletTask = (e, id) => {
        e.preventDefault();
        const newTaskList = taskList.filter((t) => t.id !== id);
        setTaskList(newTaskList);
    }
    const completeTask = (e, id) => {
        e.preventDefault();
        const index = taskList.findIndex((t) => t.id === id);
        const newTaskList = [...taskList];
        newTaskList[index] = { ...newTaskList[index], isCompleted: true };
        setTaskList(newTaskList);
    }
    return (
        <div className="todo-container">
            <h1 className="todo-heading">To-Do List</h1>
            <div className="input-container">
                <input type="text" placeholder="Enter task..." value={task} onChange={handleChange} className="task-input" />
                <button onClick={addTask} className="add-task-button">Add Task</button>
            </div>
            <ul className="task-list">
                {taskList.map((t) =>
                    <li key={t.id} className={`task - item ${t.isCompleted ? "completed" : ""}`}>
                {t.value}
                <div>
                    <button onClick={(e) => completeTask(e, t.id)} className="complete-task-button">Complete</button>
                    <button onClick={(e) => deletTask(e, t.id)} className="delete-task-button">Delete</button>
                </div>
            </li>
            )}
        </ul>
        </div >
    );
}
export default Todolist;