import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getToDoItems, postToDoItem, deleteToDoItem } from './../Actions/ToDoListActions'

import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import DeleteIcon from '@material-ui/icons/Delete'
import InputAdornment from '@material-ui/core/InputAdornment'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import Input from '@material-ui/core/Input'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
// import CircularProgress from '@material-ui/core/CircularProgress'

class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleKeyUp = this.handleKeyUp.bind(this)
    }

    componentDidMount() {
        this.props.getToDoItems()
    }

    handleClick(e) {
        e.preventDefault()
        this.props.postToDoItem(document.getElementById("input").value)
        document.getElementById("input").value = ""
    }

    handleDelete(id) {
        this.props.deleteToDoItem(id)
    }

    handleKeyUp(e) {
        e.preventDefault()
        if (e.key === "Enter") {
            this.props.postToDoItem(document.getElementById("input").value)
            document.getElementById("input").value = ""
        }
    }

    render() {
        return (
            <List style={{ paddingTop: "60px" }}>
                {this.props.toDoItems.map(toDoItem => (
                    <ListItem key={toDoItem._id}>
                        <ListItemText primary={toDoItem.value} />
                        <ListItemSecondaryAction>
                            <IconButton onClick={() => this.handleDelete(toDoItem._id)} edge="end">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>))}
                <ListSubheader>
                    <Input
                        id="input"
                        onKeyUp={this.handleKeyUp}
                        // onChange={event => event}
                        // value={null}
                        fullWidth
                        endAdornment={<InputAdornment position="end"><IconButton onClick={this.handleClick} edge="end"><AddCircleOutlineIcon /></IconButton> </InputAdornment>}
                    />
                </ListSubheader>
            </List>
        )

    }
}

function mapStateToProps(state) {
    return {
        toDoItems: state.ToDoListReducer.toDoItems
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getToDoItems: () => dispatch(getToDoItems()),
        postToDoItem: toDoItem => dispatch(postToDoItem(toDoItem)),
        deleteToDoItem: toDoItemID => dispatch(deleteToDoItem(toDoItemID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)