import React from "react";

function Brokerage() {
  return (
    <div className="container py-5">
      <div className="row gy-4">
        {/* Left Section */}
        <div className="col-12 col-md-8">
          <a href="#">
            <h2 className="fs-4 mb-3">Brokerage Calculator</h2>
          </a>
          <ul
            className="text-muted ps-3"
            style={{ lineHeight: "1.8", fontSize: "14px" }}
          >
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="col-12 col-md-4">
          <a href="#">
            <h2 className="fs-4 mb-3">List of Charges</h2>
          </a>
          <p className="text-muted" style={{ fontSize: "14px" }}>
            Explore detailed information on all applicable charges related to trading, demat, and transactions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
