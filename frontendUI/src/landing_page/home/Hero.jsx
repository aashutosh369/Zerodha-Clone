import React from "react";

function Hero() {
  return (
    <div className="container">
      <div
        className="row justify-content-center text-center"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px 20px",
        }}
      >
        {/* Hero Image */}
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="img-fluid mb-4"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />

        {/* Heading */}
        <h1
          className="mt-4"
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#1a1a1a",
          }}
        >
          Invest in everything
        </h1>

        {/* Paragraph */}
        <p
          className="mt-2"
          style={{
            fontSize: "1.1rem",
            color: "#555",
            maxWidth: "600px",
          }}
        >
          Online platform to invest in stocks, derivatives, mutual funds, and more...
        </p>

        {/* Signup Button */}
        <button
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
  );
}

export default Hero;
