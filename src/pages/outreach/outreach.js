import React from 'react';
import Header from '../../components/header';
import cuby_garage from '../../assets/Cuby_Garage.png';
import './style.css';

function Outreach() {
    return (
        <div>
            <Header />
            <div className="container-fluid outreach d-flex mt_5 height100">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-4 col-sm-12 text_center">
                        <img src={cuby_garage} alt="" width="100%" className="cuby_garage" />
                    </div>

                    <div className="col-lg-8 col-md-8 col-sm-12 text-cuby outreach-text mt_3 text_center">
                        <h3>CUBY Space Camp declared winners at Garage48 Space Hackathon</h3>
                        <p className="font20">Tartu Observatory , Estonia ( May 3 – 5, 2019 )</p>
                        <p className="font20">The satellite DIY kit concept bagged the hardware track award at the Garage48 Space Hackathon organized at the Tartu Observatory in Estonia. The team developed an early proof-of concept of a hardware model for a 1 Unit cube satellite and a graphical user interface to show data transmission. The model functioned exactly like a real satellite. The team also were able to transmit songs over the model to a remote computer.</p>
                        <p className="font20">Press Release :
                    <a className="ml-1" href=" https://garage48.org/blog/winners-of-garage48-spacetech-2019">Garage48_Blog</a>,
                    <a className="ml-1" href="https://forte.delfi.ee/news/kosmos/garage48-kosmosehakatoni-voitja-aitab-riigil-tuvastada-turbakaevanduste-deklareerimata-maksutulu?id=86121185&fbclid=IwAR2udNt7dRoaSP7VaZfliQR49htLME36Fxo-ny7mjxMjH2v2Sb4HFofumBQ">Delfi</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Outreach;