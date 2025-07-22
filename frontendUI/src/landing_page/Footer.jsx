import React from "react";

function Footer() {
  return (
    <footer className="border-top mt-5">
      <div className="container p-4">
        <div className="row mb-4">
          {/* Left logo and social icons */}
          <div className="col-12 col-md-3 mb-4">
            <img
              src="media/images/logo.svg"
              alt="logoFooter"
              id="logoFooter"
              className="img-fluid mb-2"
            />
            <p style={{ fontSize: "0.9rem" }}>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
            <div style={{ fontSize: "1.2rem", gap: "15px" }} className="d-flex">
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-telegram"></i>
            </div>
          </div>

          {/* Company */}
          <div className="col-6 col-md-3 mb-4">
            <p className="fw-bold">Company</p>
            <a href="">About</a><br />
            <a href="">Products</a><br />
            <a href="">Pricing</a><br />
            <a href="">Referral programme</a><br />
            <a href="">Careers</a><br />
            <a href="">Zerodha.tech</a><br />
            <a href="">Press & media</a><br />
            <a href="">Zerodha cares (CSR)</a>
          </div>

          {/* Support */}
          <div className="col-6 col-md-3 mb-4">
            <p className="fw-bold">Support</p>
            <a href="">Contact</a><br />
            <a href="">Support portal</a><br />
            <a href="">Z-Connect blog</a><br />
            <a href="">List of charges</a><br />
            <a href="">Downloads & resources</a>
          </div>

          {/* Account */}
          <div className="col-12 col-md-3 mb-4">
            <p className="fw-bold">Account</p>
            <a href="">Open an account</a><br />
            <a href="">Fund transfer</a><br />
            <a href="">60 day challenge</a>
          </div>
        </div>

        {/* Disclaimer / Long para */}
        <div className="text-muted" style={{ fontSize: "0.8rem", lineHeight: "1.5rem", wordWrap: "break-word" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
          </p>
          <p>
            For any complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details: Name, PAN, Address, Mobile Number, Email
            ID. Benefits: Effective Communication, Speedy redressal.
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day.
          </p>
          <p>
            As a business we don't give stock tips, and have not authorized
            anyone to trade on behalf of others. If you find anyone claiming to
            be part of Zerodha and offering such services, please create a
            ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
