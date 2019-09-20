import React, { Component } from 'react'

import AddToDo from './Components/AddToDo'
import ToDoList from './Components/ToDoList'

class App extends Component {
    render() {
        return (
            <div>
                <h1>To Do List</h1>
                <AddToDo />
                <ToDoList />
            </div>
        )
    }
}

export default App