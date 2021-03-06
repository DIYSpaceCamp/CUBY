import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import './style.css';

function header() {
    return (
        <div>
            <nav id="navbar" className="navbar fixed-top navbar-expand-md navbar-light">
                <div className="logo-container text-white">
                    <img src={logo} alt="logo" width="90" />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav" id="#navbar-nav">
                        <Link to="/" className="no-text-decoration">
                            <li className="nav-item">
                                <a className="nav-link" href="" >HOME</a>
                            </li>
                        </Link>

                        <li className="nav-item">
                            <a className="nav-link" href="#vision" ><span>VISION</span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#resources"><span>RESOURCES</span></a>
                        </li>
                        <Link to="/outreach" className="no-text-decoration">
                            <li className="nav-item">
                                <a className="nav-link" href=""><span>OUTREACH</span></a>
                            </li>
                        </Link>

                        <li className="nav-item">
                            <a className="nav-link" href="#team"><span>TEAM</span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#contact"><span>CONTACT</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default header;