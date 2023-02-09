import React, { useState } from 'react'
import Header from './Components/Header'
import CommonContext from './Components/CommonContext'
import TaskForm from './Components/TaskForm';
import ShowTaskContainer from './Components/ShowTaskContainer';


export default function App() {
  const [showAddTaskSection, setShowAddTaskSection] = useState(false);
  const [listOfTask, setListOfTask] = useState([{ taskTitle: 'Study', taskDescription: 'Today I will study Javascript.', taskDate: '2022-09-10' }, { taskTitle: 'Home Tution', taskDescription: 'Renu mam & Alka mam.', taskDate: '2022-09-12' }]);

  let objectOfValues = { showAddTaskSection, setShowAddTaskSection, listOfTask, setListOfTask }

  return (
    <>
      <CommonContext.Provider value={objectOfValues} >
        <Header />
        {showAddTaskSection && <TaskForm />}
        {!showAddTaskSection && <ShowTaskContainer />}
      </CommonContext.Provider>

    </>
  )
}


