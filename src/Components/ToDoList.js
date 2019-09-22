import React, { Component } from 'react'
import { connect } from 'react-redux'

const styles = {
    list: {
        listStyle: "none",
        width: "100%"
    },
    item: {
        display: "flex",
        justifyContent: "space-between",
        // border: "2px #bbb solid",
        padding: "10px",
        marginBottom: "5px",
        borderRadius: "5px",
        backgroundColor: "#ddd",
        alignItems: "center"
    },
    delete: {
        padding: "5px",
        borderRadius: "100%",
        // border: "none",
        backgroundColor: "#ccc"
    }
}

class ToDoList extends Component {
    render() {
        return (
            <ul style={styles.list}>
                <li style={styles.item}><span>Example To Do List Item 1</span><button style={styles.delete}>X</button></li>
                <li style={styles.item}><span>Example To Do List Item 2</span><button style={styles.delete}>X</button></li>
                <li style={styles.item}><span>Example To Do List Item 3</span><button style={styles.delete}>X</button></li>
                <li style={styles.item}><span>A really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really long to do item</span><button style={styles.delete}>X</button></li>
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ToDoList)