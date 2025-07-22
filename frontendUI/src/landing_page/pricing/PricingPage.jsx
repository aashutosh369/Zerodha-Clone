import React from "react";
import Hero from './Hero';
import Brokerage from './Brokerage';

function PricingPage(){
    return(
        <div className="container ">
            <div className="row">
                <Hero />
            </div>
            <div className="row">
                <Brokerage />
            </div>
        </div>
    )
}

export default PricingPage;