import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './Components/Header'
import ToDoList from './Pages/ToDoList'
import CommonTasks from './Pages/CommonTasks'

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/">
                    <ToDoList />
                </Route>
                <Route path="/commonTasks">
                    <CommonTasks />
                </Route>
            </Switch>
        </Router>
    )
}

export default App