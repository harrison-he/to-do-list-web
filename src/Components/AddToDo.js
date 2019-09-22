import React, { Component } from 'react'
import { connect } from 'react-redux'

const styles = {
    form: {
        display: "flex", 
        flexDirection: "column",
        marginBottom: "10px",
        width: "100%"
    },
    inputBar: {
        marginBottom: "10px",
        borderRadius: "5px",
        padding: "5px 10px"
    },
    submit: {
        borderRadius: "5px",
        padding: "10px",
    }
}

class AddToDo extends Component {
    render() {
        return (
            <form style={styles.form}>
                <input style={styles.inputBar} placeholder="Enter To Do Item..." />
                <input style={styles.submit} type="submit" ></input>
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