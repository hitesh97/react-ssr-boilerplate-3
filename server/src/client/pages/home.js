import React, { PureCompoenet } from 'react';

const Home = () => {
    return (
        <div>
            <div>I'm the home component</div>
            <button onClick={() => alert('Testing onclick function')}>Press Me!</button>
        </div>
    );
};

export default {
    component: Home
};
