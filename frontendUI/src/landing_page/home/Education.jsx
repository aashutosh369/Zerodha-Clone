import React from "react";

function Education() {
  return (
    <div className="container my-5">
      <div className="d-flex flex-column-reverse flex-md-row align-items-center">

        {/* Image Section */}
        <div className="col-md-6 mb-4 mb-md-0 text-center">
          <img
            src="media/images/education.svg"
            alt="educationPicture"
            id="educationPicture"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6 mt-4 mt-md-0">
          <h1 className="fs-2 mb-3">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="d-block mb-4">
            Varsity <i className="fa-solid fa-arrow-right"></i>
          </a>
          <p>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#">
            TradingQ&A <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        
      </div>
    </div>
  );
}

export default Education;
