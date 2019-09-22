import React, { Component } from 'react'

import AddToDo from './Components/AddToDo'
import ToDoList from './Components/ToDoList'



const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
        marginBottom: "5px",
        marginLeft: "auto",
        marginRight: "auto",
        width: window.innerWidth > 700 ? "60%" : "95%",
    },
    heading: {
        textAlign: "center",
        marginBottom: "10px",
        width: "100%"
    }
}

console.log("Width: ",styles.container.width)

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