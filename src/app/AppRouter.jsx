import React from 'react'
import {Route, Router, Switch} from 'react-router-dom'
import DashboardPage from '../scenes/dashboard/DashboardPage'
import PageNotFound from '../scenes/notfound/PageNotFound'
import history from './history'
import DemoPage from '../scenes/demo/DemoPage'

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route path='/' exact component={DashboardPage}/>
            <Route path='/demo' component={DemoPage}/>
            <Route component={PageNotFound}/>
        </Switch>
    </Router>
)

export default AppRouter
