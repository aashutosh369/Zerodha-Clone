import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3002/signup/", { name, email, password })
      .then((result) => {
        console.log(result);
        alert("Signup Successful! You can now login.");
        setName("");
        setEmail("");
        setPassword("");
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="d-flex justify-content-center flex-column align-items-center"
      style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8f9fa" }}
    >
      <div
        style={{
          marginTop: "50px",
          marginBottom: "30px",
          maxWidth: "500px",
          width: "100%",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Signup</h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              required
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              required
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Signup
          </button>
        </form>
      </div>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <p>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#007bff", textDecoration: "none" }}>
            Click here!
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
