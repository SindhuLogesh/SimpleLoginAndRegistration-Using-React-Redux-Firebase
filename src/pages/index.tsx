import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Router, Switch } from 'react-router';

import { history as browserHistory } from '../store/configureStore';
import { Dashboard } from './DashBoard/Dashboard';
import { Login } from './Login/Login';
import { Registration } from './Registration/Registration';

const PagesComponent: React.FC = (): React.ReactElement => {
    return (
        <Router history={browserHistory}>
            <Switch>
                <Route path='/Registration' component={Registration} />
                <Route path='/Dashboard' component={Dashboard} />
                <Route path='/Login' component={Login} />
                <Route render={() => <Redirect to='/Login' />} />
            </Switch>
        </Router>
    );
};

export const Pages = connect()(PagesComponent);
