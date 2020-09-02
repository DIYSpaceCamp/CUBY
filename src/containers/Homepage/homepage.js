import React from 'react';
import Header from '../../components/header/index';
import Home from '../../components/home/index';
import Features from '../../components/features';


function homepage() {
    return (
        <div>
            <Header />
            <Home />
            {/* <Features /> */}
            <div className="d-flex justify-content-center"> More content here
            </div>
        </div>
    );
}
export default homepage;