import React, { Component } from 'react'
import { connect } from 'react-redux'

const styles = {
    form: {
        display: "flex", 
        flexDirection: "column",
        marginBottom: "15px",
        width: "100%",
        backgroundColor: "#fff",
        padding: "15px",
        border: "1px #ccc solid",
    },
    inputBar: {
        marginBottom: "10px",
       
        border: "none",
        padding: "5px 0",
        height: "35px",
        borderBottom: "1px solid #ccc"
    },
    submit: {
        padding: "10px 0"
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