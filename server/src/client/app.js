import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/header';
import { fetchCurrentUser } from './actions/index'


const App = ({ route }) => {
    return ([
        <Header />,
        <div className="container">
            {renderRoutes(route.routes)}
        </div>
    ]);
};

export default {
    component: App,
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
