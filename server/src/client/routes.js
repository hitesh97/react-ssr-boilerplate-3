import React from 'react';
import HomePage from './pages/home';
import UsersListPage from './pages/users-list';

export default [
    {
        ...HomePage,        
        path: "/",
        exact: true
    },
    {
        ...UsersListPage,
        path: "/users",
        exact: true
    }
];
