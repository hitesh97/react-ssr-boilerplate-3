import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => { // since static context is only available on the server side we need default the value
    staticContext.notFound = true;
    return <h1>404 Not Found!</h1>
};

export default {
    component: NotFoundPage
};
