import React from 'react'
import CommonContext from './CommonContext'
import TaskBox from './TaskBox';

function ShowTaskContainer() {
  return (
    <>
      <CommonContext.Consumer>
        {({ listOfTask }) =>
          <div className="container p-3">
            <h1 className='text-center mb-3'><u>List of Task</u></h1>
            <div className="p-1">

              {(listOfTask.length !== 0) ?
                listOfTask.map((task, ind) => <TaskBox key={ind} id={ind} detail={task} />) :
                <h4 className='text-center'>No Task to Show.</h4>
              }
            </div>
          </div>
        }
      </CommonContext.Consumer>
    </>
  )
}

export default ShowTaskContainer;
