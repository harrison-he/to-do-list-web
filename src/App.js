import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Header from './Components/Header'
import ToDoList from './Pages/ToDoList'




class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route>
                        <ToDoList path="/"/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App