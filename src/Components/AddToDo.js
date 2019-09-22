import React, { Component } from 'react'
import { connect } from 'react-redux'

const styles = {
    form: {
        display: "flex", 
        flexDirection: "column",
        marginBottom: "10px"
    },
    inputBar: {
        marginBottom: "2px"
    }
}

class AddToDo extends Component {
    render() {
        return (
            <form style={styles.form}>
                <input style={styles.inputBar} placeholder="Enter To Do Item..." />
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