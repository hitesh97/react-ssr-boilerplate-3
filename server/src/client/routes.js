import React from 'react';
import Home from './pages/home';
import UsersList, { loadData } from './pages/users-list';

export default [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        loadData,
        path: "/users",
        component: UsersList,
        exact: true
    }
];
