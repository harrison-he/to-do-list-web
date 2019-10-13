import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Header from './Components/Header'
import ToDoList from './Pages/ToDoList'

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route>
                    <ToDoList path="/" />
                </Route>
            </Switch>
        </Router>
    )
}

export default App