import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Signin from './pages/Signin/index';
import Register from './pages/Register/index';
import Profile from './pages/Profile/index';
import Incident from './pages/Incident/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Signin} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incident" component={Incident} />
            </Switch>
        </BrowserRouter>
    );
}
