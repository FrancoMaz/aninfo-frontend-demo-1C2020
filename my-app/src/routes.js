import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MainPage from "./components/MainPage"
import TransactionPage from "./components/TransactionPage";

export const Routes = () => (
    <div>
        <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/transaction/:type' component={TransactionPage} />
        </Switch>
    </div>
)