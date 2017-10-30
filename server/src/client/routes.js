import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home';
import UsersList from './components/users-list';

export default () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={UsersList} />            
        </div>
    );
};
