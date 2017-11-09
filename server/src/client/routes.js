import React from 'react';
import App from './app';
import HomePage from './pages/home';
import UsersListPage from './pages/users-list';

export default [
    {
        ...App,
        routes: [
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
        ]
    }
];
