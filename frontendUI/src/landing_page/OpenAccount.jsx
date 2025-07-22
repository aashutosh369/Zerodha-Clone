import React from "react";
import { useNavigate } from "react-router-dom";

function OpenAccount() {

   const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup"); 
  };
  return (
    <div
      className="container mt-5 mb-5"
      style={{
        wordWrap: "break-word", // text wrapping
        textAlign: "center", // center text
      }}
    >
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <h1 className="mt-5">Open a Zerodha account</h1>
          <p className="mt-3">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>

          <button
            onClick={handleSignupClick} 
            className="btn btn-primary mt-4"
            id="signupHeroButton"
            style={{
              padding: "10px 30px",
              fontSize: "1rem",
              borderRadius: "6px",
              whiteSpace: "normal",
              wordWrap: "break-word",
              textAlign: "center",
              width: "100%",
              maxWidth: "250px",
            }}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
