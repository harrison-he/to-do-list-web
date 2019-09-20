import React, { Component } from 'react'

class AddToDo extends Component {
    render() {
        return (
            <form>
                <input placeholder="Enter To Do Item..." />
                <input type="submit" ></input>
            </form>
        )
    }
}

export default AddToDo