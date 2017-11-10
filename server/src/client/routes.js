import React from 'react';
import App from './app';
import HomePage from './pages/home';
import UsersListPage from './pages/users-list';
import AdminsListPage from './pages/admins-list';
import NotFoundPage from './pages/404';

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
            },
            {
                ...AdminsListPage,
                path: "/admins",
                exact: true
            },
            {
                ...NotFoundPage
            }
        ]
    }
];
