import React, { PureCompoenet } from 'react';


const Home = () => {
    return (
        <div className="row">
            <div className="col-md-12">
                <div>Wellcome</div>
                <button onClick={() => alert('Testing onclick function')}>Press Me!</button>
            </div>
        </div>
    );
};

export default {
    component: Home
};
