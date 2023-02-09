import React from 'react'
import './Components.css'
import CommonContext from './CommonContext'

function Header() {
  return (
    <>
      <CommonContext.Consumer>
        {({ setShowAddTaskSection }) =>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">DoToday</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Tasks</a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <button id='addTaskBtn' onClick={(e) => { e.preventDefault(); setShowAddTaskSection(true) }} className="btn btn-light my-2 my-sm-0">Add New Task</button>
              </form>
            </div>
          </nav>
        }
      </CommonContext.Consumer>
    </>
  )
}

export default Header
