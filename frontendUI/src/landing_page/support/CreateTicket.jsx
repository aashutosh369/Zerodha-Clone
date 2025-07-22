import React from "react";

function CheckTicket() {
  return (
    <div className="container my-5" id="CheckTicketA">
      <div className="row">
        <div className="col">
          <h2 className="text-muted fs-3 mb-4 text-center text-md-start">
            To create a ticket, select a relevant topic
          </h2>
        </div>
      </div>

      <div className="row gy-4 justify-content-center">
        <div className="col-12 col-md-4 col-lg-3">
          <h4 className="mb-4 fs-5">
            <i className="fa-solid fa-heart-circle-plus me-2"></i> Account Opening
          </h4>
          <a href="">Resident individual</a><br />
          <a href="">Minor</a><br />
          <a href="">Non Resident Indian (NRI)</a><br />
          <a href="">Company, Partnership, HUF and LLP</a><br />
          <a href="">Glossary</a><br />
        </div>

        <div className="col-12 col-md-4 col-lg-3">
          <h4 className="mb-4 fs-5">
            <i className="fa-solid fa-user me-2"></i> Your Zerodha Account
          </h4>
          <a href="">Your Profile</a><br />
          <a href="">Account modification</a><br />
          <a href="">Client Master Report (CMR)</a><br />
          <a href="">Nomination</a><br />
          <a href="">Transfer and conversion of securities</a><br />
        </div>

        <div className="col-12 col-md-4 col-lg-3">
          <h4 className="mb-4 fs-5">
            <i className="fa-solid fa-chart-column me-2"></i> Kite
          </h4>
          <a href="">IPO</a><br />
          <a href="">Trading FAQs</a><br />
          <a href="">Margin Trading & Margins</a><br />
          <a href="">Charts and orders</a><br />
          <a href="">Alerts and Nudges</a><br />
          <a href="">General</a><br />
        </div>

        <div className="col-12 col-md-4 col-lg-3">
          <h4 className="mb-4 fs-5">
            <i className="fa-solid fa-wallet me-2"></i> Funds
          </h4>
          <a href="">Add money</a><br />
          <a href="">Withdraw money</a><br />
          <a href="">Add bank accounts</a><br />
          <a href="">eMandates</a><br />
        </div>

        <div className="col-12 col-md-4 col-lg-3">
          <h4 className="mb-4 fs-5">
            <i className="fa-solid fa-circle-dollar-to-slot me-2"></i> Console
          </h4>
          <a href="">Portfolio</a><br />
          <a href="">Corporate actions</a><br />
          <a href="">Funds statement</a><br />
          <a href="">Reports</a><br />
          <a href="">Profile</a><br />
          <a href="">Segments</a><br />
        </div>

        <div className="col-12 col-md-4 col-lg-3">
          <h4 className="mb-4 fs-5">
            <i className="fa-solid fa-coins me-2"></i> Coin
          </h4>
          <a href="">Mutual funds</a><br />
          <a href="">National Pension Scheme (NPS)</a><br />
          <a href="">Fixed Deposit (FD)</a><br />
          <a href="">Features on Coin</a><br />
          <a href="">Payments and Orders</a><br />
          <a href="">General</a><br />
        </div>
      </div>
    </div>
  );
}

export default CheckTicket;
