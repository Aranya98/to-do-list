import React from 'react'
import { useState } from 'react';
import CommonContext from './CommonContext';

function TaskForm() {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [taskObject, setTaskObject] = useState({});

    return (
        <>
            <CommonContext.Consumer>
                {({ setShowAddTaskSection, listOfTask, setListOfTask }) =>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        setShowAddTaskSection(false);
                        // let obj = {taskTitle, taskDescription, taskDate};
                        // console.log(obj);
                        // setTaskObject(obj);
                        // console.log(taskObject);
                        setListOfTask([...listOfTask, { taskTitle, taskDescription, taskDate }])
                    }}>
                        <div className="container p-3 w-50">
                            <h2 className='text-center'>Add a Task</h2>
                            <div className="form-group">
                                <label htmlFor="taskTitle">Enter Task Title</label>
                                <input type="text" className="form-control" id="taskTitle" placeholder="Learn, Play, etc..." required onChange={e => setTaskTitle(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="taskDescription">Enter Task Description</label>
                                <textarea className="form-control" rows='4' id="taskDescription" placeholder="Enter the Task Description" required onChange={e => setTaskDescription(e.target.value)} ></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="taskDate">Select the Deadline</label>
                                <input type="date" className="form-control" id="taskDate" onChange={e => setTaskDate(e.target.value)} required />
                            </div>
                            <button type="submit" className="btn btn-danger w-100 mb-2">Add Task</button>
                            <button className="btn btn-primary w-100" onClick={()=>setShowAddTaskSection(false)}>Cancel</button>
                        </div>
                    </form>
                }
            </CommonContext.Consumer>
        </>
    )
}

export default TaskForm
