import React, { Component } from 'react'
import { connect } from 'react-redux'

const styles = {
    form: {
        display: "flex", 
        flexDirection: "column",
        marginBottom: "15px",
        width: "100%"
    },
    inputBar: {
        marginBottom: "10px",
        borderRadius: "10px",
        padding: "5px 10px",
        height: "35px",
        border: "1px solid #ccc"
    },
    submit: {
        borderRadius: "10px",
        padding: "10px",
    }
}

class AddToDo extends Component {
    render() {
        return (
            <form style={styles.form}>
                <input style={styles.inputBar} placeholder="Enter To Do Item..." />
                <button style={styles.submit} type="submit" >Add To Do Item</button>
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