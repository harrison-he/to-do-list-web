import React, { Component } from 'react'

import AddToDo from './Components/AddToDo'
import ToDoList from './Components/ToDoList'

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
        marginBottom: "5px"
    },
    heading: {
        textAlign: "center",
        marginBottom: "5px"
    }
}

class App extends Component {
    render() {
        return (
            <div style={styles.container}>
                <h1 style={styles.heading}>To Do List</h1>
                <AddToDo />
                <ToDoList />
            </div>
        )
    }
}

export default App