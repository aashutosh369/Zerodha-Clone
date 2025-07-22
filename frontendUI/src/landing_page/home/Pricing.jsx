import React from "react";

function Pricing() {
  return (
    <div className="container p-5">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-12 col-md-6 mb-4">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-decoration-none">
            See Pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* Right Section */}
        <div className="col-12 col-md-6">
          <div className="row">
            <div className="col-12 col-sm-6 mb-4">
              <div className="pricingBox border text-center p-3 h-100 text-wrap">
                <h1 className="fs-2">
                  <i className="fa-solid fa-indian-rupee-sign"></i>0
                </h1>
                <p className="m-0">
                  Free equity delivery and direct mutual funds
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 mb-4">
              <div className="pricingBox border text-center p-3 h-100 text-wrap">
                <h1 className="fs-2">
                  <i className="fa-solid fa-indian-rupee-sign"></i>20
                </h1>
                <p className="m-0">Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
