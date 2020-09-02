import React from 'react';
import AssembleVideo from '../assemble_video/index';
import logo from '../../assets/logo.png'
import './style.css';

function home() {
    return (
        <div className="container-fluid home">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 cuby">
                    <img src={logo} alt="logo" width="50%" />
                    <p className="friend-text">Your friend in space</p>
                    <p className="assemble-text mb-1 mt-5">Assemble. Code. Launch.</p>
                    <button>Request Demo</button>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                    <AssembleVideo />
                </div>
            </div>
            <div className="row home-footer">
                <span><i class="fab fa-github mr-4"></i></span>
                <span><i class="fab fa-linkedin-in mr-4"></i></span>
                <span><i class="fab fa-google"></i></span>
            </div>
        </div>
    );
}

export default home;