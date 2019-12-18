import React, { Component } from 'react'
import { connect } from 'react-redux'

import { postCommonTasks, postCommonTask } from './../Actions/CommonTasksActions'

import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import DeleteIcon from '@material-ui/icons/Delete'
import InputAdornment from '@material-ui/core/InputAdornment'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import Input from '@material-ui/core/Input'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'

class CommonTasks extends Component {
    constructor(props) {
        super(props)
        this.handleKeyUp = this.handleKeyUp.bind(this)
        this.addCommonTasks = this.addCommonTasks.bind(this)
        this.deleteCommonTasks = this.deleteCommonTasks.bind(this)
    }

    componentDidMount() {
        this.prop.getCommonTasks()
    }

    handleClick(e) {
        e.preventDefault()
        this.props.postCommonTask(document.getElementById("input2"))
        document.getElementById("input2").value = ""
    }

    handleKeyUp(e) {
        e.preventDefault()
        this.props.postCommonTask(document.getElementById("input2"))
        document.getElementById("input2").value = ""
    }

    addCommonTasks() {
        this.props.postCommonTasks()
    }

    deleteCommonTasks() {
        this.props.deleteCommonTasks()
    }

    render() {
        return (
            <List>
                <ListSubheader>
                    <Input
                        id="input2"
                        onKeyUp={this.handleKeyUp}
                        // onChange={event => event}
                        // value={null}
                        fullWidth
                        endAdornment={<InputAdornment position="end"><IconButton onClick={this.handleClick} edge="end"><AddCircleOutlineIcon /></IconButton> </InputAdornment>}
                    />
                </ListSubheader>
                <ListSubheader>
                    <Button onClick={this.addCommonTasks}>Add Selected Tasks to To Do List</Button>
                </ListSubheader>
                <ListSubheader>
                    <Button disabled>Delete Selected Tasks from Common Tasks List</Button>
                </ListSubheader>
            </List>
        )
    }
}

function mapStateToProps(state) {
    return {
        commonTasks: state.CommonTasksReducer.commonTasks
    }
}

function mapDispatchToProps(dispatch) {
    return {
        postCommonTasks: commonTasks => dispatch(postCommonTasks(commonTasks)), 
        postCommonTask: commonTask => dispatch(postCommonTask(commonTask)),
        getCommonTasks: () => dispatch(getCommonTasks()),
        deleteCommonTasks: commonTaskIDs => dispatch(deleteCommonTasks(commonTaskIDs))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommonTasks)