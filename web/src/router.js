import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';

import home from './components/home';
import life from './components/life';
import brand from './components/brand';
import dress from './components/dress';
import chest from './components/chest';
import store from './components/store';

const Routers = () => (
    <Switch>
        <Route component={home} exact path="/" />
        <Route component={life} exact path="/life" />
        <Route component={brand} exact path="/brand" />
        <Route component={dress} exact path="/dress" />
        <Route component={chest} exact path="/chest" />
        <Route component={store} exact path="/store" />
    </Switch>
);

export default Routers;