import React from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import ListAltIcon from '@material-ui/icons/ListAlt'
import Typography from '@material-ui/core/Typography'

function Header() {
    return (
        <AppBar>
            <Toolbar>
                <IconButton edge="start" color="inherit">
                    <ListAltIcon />
                </IconButton>
                <Typography variant="h6">To Do List</Typography>
                <Link to="/">To Do List</Link>
                <Link to="/commonTasks">Common Tasks</Link>
            </Toolbar>
        </AppBar>
    )
}

export default Header