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
        border: "1px #ccc solid",
        padding: "15px",
        marginBottom: "10px",
        // borderRadius: "10px",
        backgroundColor: "#fff",
        alignItems: "center",
        color: "#111"
    },
    delete: {
        padding: "5px",
        // borderRadius: "10px",
       
    }
}

class ToDoList extends Component {
    render() {
        return (
            <ul style={styles.list}>
                <li style={styles.item}><span>Example To Do List Item 1</span><button style={styles.delete}>Delete</button></li>
                <li style={styles.item}><span>Example To Do List Item 2</span><button style={styles.delete}>Delete</button></li>
                <li style={styles.item}><span>Example To Do List Item 3</span><button style={styles.delete}>Delete</button></li>
                <li style={styles.item}><span>A really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really long to do item</span><button style={styles.delete}>Delete</button></li>
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