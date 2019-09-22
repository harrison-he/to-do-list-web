import React, { Component } from 'react'
import { connect } from 'react-redux' 

class ToDoList extends Component {
    render() {
        return (
            <ul>
                <li>Example To Do List Item</li>
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