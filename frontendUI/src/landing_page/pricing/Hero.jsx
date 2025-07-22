import React from "react";
import OpenAccount from "../OpenAccount";

function Hero() {
  return (
    <div className="container mt-5 mb-5">
      {/* Header Section */}
      <div className="row text-center border-bottom pb-4">
        <div className="col-12">
          <h1 className="fs-2 mb-3">Pricing</h1>
          <h3 className="text-muted fs-5">
            Free equity investments and flat ₹20 intraday and F&O trades
          </h3>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="row mt-5 g-4 text-center">
        {/* Card 1 */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="p-3 h-100">
            <img
              src="/media/images/pricingEquity.svg"
              alt="Equity Delivery"
              className="img-fluid mb-3"
            />
            <h2 className="fs-4">Free equity delivery</h2>
            <p className="text-muted">
              All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="p-3 h-100">
            <img
              src="/media/images/intradayTrades.svg"
              alt="Intraday Trades"
              className="img-fluid mb-3"
            />
            <h2 className="fs-4">Intraday and F&O trades</h2>
            <p className="text-muted">
              Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-md-6 col-lg-4 mx-md-auto">
          <div className="p-3 h-100">
            <img
              src="/media/images/pricingEquity.svg"
              alt="Direct Mutual Fund"
              className="img-fluid mb-3"
            />
            <h2 className="fs-4">Free direct MF</h2>
            <p className="text-muted">
              All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-5">
        <OpenAccount />
      </div>
    </div>
  );
}

export default Hero;
