import React, { Component } from 'react'
import { connect } from 'react-redux'

class AddToDo extends Component {
    render() {
        return (
            <form style={{ display: "flex", flexDirection: "column", marginBottom: "10px"}}>
                <input placeholder="Enter To Do Item..." />
                <input type="submit" ></input>
            </form>
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

export default connect(mapStateToProps,mapDispatchToProps)(AddToDo)