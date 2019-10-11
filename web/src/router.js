import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';

import home from './components/home';
import life from './components/life';

const Routers = () => (
    <Switch>
        <Route component={home} exact path="/" />
        <Route component={life} exact path="/life" />
    </Switch>
);

export default Routers;