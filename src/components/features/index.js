import React from 'react';
import icon1 from '../../assets/icon1.jpg';
import './style.css';

function features() {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-3">Features</h2>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="card text-center">
                        <img className="card-img-top m-auto" src={icon1} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Feature 1</h5>
                            <p className="card-text">Feature description</p>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="card text-center">
                        <img className="card-img-top m-auto" src={icon1} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Feature 2</h5>
                            <p className="card-text">Feature description</p>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="card text-center">
                        <img className="card-img-top m-auto" src={icon1} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Feature 3</h5>
                            <p className="card-text">Feature description</p>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="card text-center">
                        <img className="card-img-top m-auto" src={icon1} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Feature 4</h5>
                            <p className="card-text">Feature description</p>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="border rounded p-3">
                        <h2>Space Education: Present Scenario</h2>
                        <p>Something something...</p>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="border rounded p-3">
                        <h2>What does CUBY offer?</h2>
                        <p>Something something...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default features;