import React, { Component } from 'react'
import { connect } from 'react-redux'

const styles = {
    list: {
        listStyle: "none"
    },
    item: {
        display: "flex",
        justifyContent: "space-between",
        border: "1px #ccc solid"
    }
}

class ToDoList extends Component {
    render() {
        return (
            <ul style={styles.list}>
                <li style={styles.item}><span>Example To Do List Item</span><button>X</button></li>
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