import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Routes } from './types';
import Home from '../pages/Home/Home.page';
import Details from '../pages/Details/Details.page';


const RootPage = (): React.ReactElement =>  {
    return (
        <Switch>
            <Route exact path={ Routes.HOME } component={ Home } />
            <Route path={ Routes.DETAILS } component={ Details } />
            <Redirect to={ Routes.HOME } />
        </Switch>
    );
};

export default RootPage;
