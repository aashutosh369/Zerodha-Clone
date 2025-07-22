import React from "react";

function Awards() {
  return (
    <div className="container mb-5">
      <div className="row mt-5 align-items-center">

        {/* Image column - will appear first on mobile, second on desktop */}
        <div className="col-md-6 mt-4 order-1 order-md-1 text-center">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker in INDIA"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* Text column - will appear second on mobile, first on desktop */}
        <div className="col-md-6 mt-4 order-2 order-md-2">
          <h1 id="AwardHeading" className="mt-4 text-center text-md-start">
            Largest stock broker in India
          </h1>
          <p className="mt-3 text-center text-md-start">
            2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
          </p>

          <div className="row mt-3">
            <div className="col-6">
              <ul style={{ wordWrap: "break-word" }}>
                <li className="AwardLiLeft">Features and Options</li>
                <li className="AwardLiLeft">Commodity derivatives</li>
                <li className="AwardLiLeft">Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul style={{ wordWrap: "break-word" }}>
                <li className="AwardLiRight">Stocks & IPOs</li>
                <li className="AwardLiRight">Direct mutual funds</li>
                <li className="AwardLiRight">Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 text-center text-md-start">
            <img
              src="media/images/pressLogos.png"
              alt="Press Logo"
              className="img-fluid"
              id="AwardPressLogo"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Awards;
