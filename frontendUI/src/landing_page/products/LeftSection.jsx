import React from "react";

function LeftSection({
  imgURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
          <img src={imgURL} alt="Product" className="img-fluid" />
        </div>

        {/* Content Section */}
        <div className="col-12 col-md-6">
          <h1 className="mb-4 fs-2">{productName}</h1>
          <p className="mb-3 text-muted">{productDescription}</p>

          {/* Links */}
          <div className="mb-4 d-flex flex-wrap gap-3">
            <a href={tryDemo} className="text-decoration-none text-primary">
              Try Demo <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href={learnMore} className="text-decoration-none text-primary">
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          {/* App Store Buttons */}
          <div className="d-flex flex-row gap-3">
            <a href={googlePlay}>
              <img
                src="/media/images/googlePlayBadge.svg"
                alt="Google Play"
                className="img-fluid"
                style={{ maxHeight: "50px" }}
              />
            </a>
            <a href={appStore}>
              <img
                src="/media/images/appstoreBadge.svg"
                alt="App Store"
                className="img-fluid"
                style={{ maxHeight: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
