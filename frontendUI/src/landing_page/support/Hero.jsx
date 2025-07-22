import React from "react";

function Hero() {
  return (
    <div
      className="container"
      style={{
        maxWidth: "700px",
        padding: "50px 15px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h2
          style={{
            fontWeight: "bold",
            fontSize: "28px",
            marginBottom: "10px",
            color: "#1d3557",
          }}
        >
          Support Portal
        </h2>
        <p style={{ color: "#6c757d", fontSize: "15px" }}>
          Search your query or browse help topics to raise a ticket.
        </p>
      </div>

      {/* Search bar */}
      <div
        style={{
          marginBottom: "25px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          display: "flex",
        }}
      >
        <input
          type="search"
          placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
          style={{
            flex: 1,
            padding: "14px",
            fontSize: "15px",
            border: "1px solid #ced4da",
            borderRight: "none",
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
            outline: "none",
          }}
        />
        <button
          style={{
            backgroundColor: "#00b4d8",
            color: "#fff",
            border: "1px solid #00b4d8",
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
            padding: "0 20px",
          }}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      {/* Quick Links */}
      <div style={{ marginBottom: "30px" }}>
        <p style={{ fontWeight: "600", marginBottom: "10px" }}>Quick Links:</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
          <a href="#" style={{ textDecoration: "underline", color: "#007bff" }}>
            Track account opening
          </a>
          <a href="#" style={{ textDecoration: "underline", color: "#007bff" }}>
            Segment activation
          </a>
          <a href="#" style={{ textDecoration: "underline", color: "#007bff" }}>
            Intraday margins
          </a>
          <a href="#" style={{ textDecoration: "underline", color: "#007bff" }}>
            Kite user manual
          </a>
        </div>
      </div>

      {/* Featured Section */}
      <div>
        <p style={{ fontWeight: "600", marginBottom: "10px" }}>Featured:</p>
        <ul style={{ listStyle: "none", paddingLeft: "20px", marginBottom: 0 }}>
          <li>
            <a
              href="#"
              style={{ textDecoration: "underline", color: "#343a40" }}
            >
              Quarterly Settlement of Funds - July 2025
            </a>
          </li>
          <li>
            <a
              href="#"
              style={{ textDecoration: "underline", color: "#343a40" }}
            >
              Exclusion of F&O contracts on 8 securities from August 29, 2025
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
