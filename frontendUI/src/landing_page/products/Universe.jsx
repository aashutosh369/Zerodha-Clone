import React from "react";

function Universe() {
  return (
    <div className="container mt-5 mb-5 border-top">
      <div className="text-center mt-5">
        <h1 className="fs-2 mb-3">The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      {/* First Row */}
      <div className="row mt-5 text-center text-muted">
        <div className="col-12 col-sm-6 col-md-4 mb-5 d-flex flex-column align-items-center">
          <img
            src="/media/images/smallcaseLogo.png"
            alt="smallcaseLogo"
            className="mb-3 img-fluid"
            style={{ maxHeight: "60px", objectFit: "contain" }}
          />
          <p className="text-wrap">Thematic investment platform</p>
        </div>

        <div className="col-12 col-sm-6 col-md-4 mb-5 d-flex flex-column align-items-center">
          <img
            src="/media/images/streakLogo.png"
            alt="Streak"
            className="mb-3 img-fluid"
            style={{ maxHeight: "60px", width: "40%", objectFit: "contain" }}
          />
          <p className="text-wrap">Algo & strategy platform</p>
        </div>

        <div className="col-12 col-sm-6 col-md-4 mb-5 d-flex flex-column align-items-center">
          <img
            src="/media/images/sensibullLogo.svg"
            alt="Sensibull"
            className="mb-3 img-fluid"
            style={{ width: "80%", maxHeight: "60px", objectFit: "contain" }}
          />
          <p className="text-wrap">Option trading platform</p>
        </div>
      </div>

      {/* Second Row */}
      <div className="row text-center text-muted">
        <div className="col-12 col-sm-6 col-md-4 mb-5 d-flex flex-column align-items-center">
          <img
            src="/media/images/zerodhaFundhouse.png"
            alt="Zerodha Fund House"
            className="mb-3 img-fluid"
            style={{ width: "50%", maxHeight: "60px", objectFit: "contain" }}
          />
          <p className="text-wrap">Asset management</p>
        </div>

        <div className="col-12 col-sm-6 col-md-4 mb-5 d-flex flex-column align-items-center">
          <img
            src="/media/images/goldenpiLogo.png"
            alt="GoldenPi"
            className="mb-3 img-fluid"
            style={{ width: "50%", maxHeight: "60px", objectFit: "contain" }}
          />
          <p className="text-wrap">Bonds trading platform</p>
        </div>

        <div className="col-12 col-sm-6 col-md-4 mb-5 d-flex flex-column align-items-center">
          <img
            src="/media/images/dittoLogo.png"
            alt="Ditto"
            className="mb-3 img-fluid"
            style={{ width: "40%", maxHeight: "60px", objectFit: "contain" }}
          />
          <p className="text-wrap">Insurance</p>
        </div>
      </div>
    </div>
  );
}

export default Universe;
