import React, { PureCompoenet } from 'react';
import { Helmet } from 'react-helmet';


const Home = () => {
    return (
        <div className="row">
            <div className="col-md-12">
                <Helmet>
                    <title>Home</title>
                    <meta property="og:title" content="Home" />
                </Helmet>
                <div>Wellcome</div>
                <button onClick={() => alert('Testing onclick function')}>Press Me!</button>
            </div>
        </div>
    );
};

export default {
    component: Home
};
