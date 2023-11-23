import React from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
import Admin from './Admin'
import UserRegisterForm from './UserRegisterForm'
import Home from './Home'

function Routes() {
    return(
        <Switch>
            <Route exact path='/admin'><Admin /></Route>
            <Route exact path='/register'><UserRegisterForm /></Route>
            <Route exact path='/'><Home /></Route>
            <Redirect to='/'/>
        </Switch>
    )
}

export default Routes