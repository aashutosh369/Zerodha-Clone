import React from "react";

function RightSection({ productName, productDescription, learnMore, imgURL }) {
  return (
    <div className="container mt-5">
      <div className="row d-flex flex-column-reverse flex-md-row justify-content-around align-items-center">
        {/* Text Section */}
        <div className="col-md-5 mt-4 d-flex flex-column justify-content-center text-center text-md-start">
          <h1 className="mb-3 fs-2">{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <a href={learnMore}>
            Learn More <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* Image Section */}
        <div className="col-md-5 mb-4">
          <img src={imgURL} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
