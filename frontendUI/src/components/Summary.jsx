
import React from "react";

function Summary() {
  return (
    <div style={{ marginTop: "62px", padding: "0 15px" }}>
      <div style={{ marginTop: "1rem" }}>
        <h2 style={{ fontSize: "2rem" }}>Hi, Ashutosh</h2>
      </div>

      <div
        style={{
          borderTop: "1px solid #dee2e6",
          marginTop: "2rem",
          marginBottom: "3rem",
          paddingTop: "3rem",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {/* Equity */}
        <div style={{ flex: "0 1 45%", color: "#6c757d" }}>
          <h4>
            <i className="fa-solid fa-chart-pie"></i> Equity
          </h4>
          <div style={{ paddingTop: "0.5rem", display: "flex" }}>
            <div style={{ flex: "1" }}>
              <p style={{ fontSize: "2.5rem", margin: 0 }}>0</p>
              <p style={{ margin: 0 }}>Margin available</p>
            </div>
            <div style={{ flex: "1" }}>
              <section>
                <table style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td style={{ color: "#6c757d" }}>Margins used</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td style={{ color: "#6c757d" }}>Opening balance</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <a href="#">View statement</a>
            </div>
          </div>
        </div>

        {/* Commodity */}
        <div style={{ flex: "0 1 45%", color: "#6c757d" }}>
          <h4>
            <i className="fa-solid fa-droplet"></i> Commodity
          </h4>
          <div style={{ paddingTop: "0.5rem", display: "flex" }}>
            <div style={{ flex: "1" }}>
              <p style={{ fontSize: "2.5rem", margin: 0 }}>0</p>
              <p style={{ margin: 0 }}>Margin available</p>
            </div>
            <div style={{ flex: "1" }}>
              <section>
                <table style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td style={{ color: "#6c757d" }}>Margins used</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td style={{ color: "#6c757d" }}>Opening balance</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <a href="#">View statement</a>
            </div>
          </div>
        </div>
      </div>

      {/* Conditional Block 1 */}
      <div
        style={{
          textAlign: "center",
          borderTop: "1px solid #dee2e6",
          paddingTop: "90px",
          marginBottom: "3rem",
          color: "#6c757d",
        }}
      >
        <img
          src="media/images/holdings.svg"
          alt="stocksImage"
          style={{ width: "20%", marginTop: "-50px" }}
        />
        <p>Conditional message "depends on your demat Stocks holdings"</p>
        <button
          style={{
            backgroundColor: "#0d6efd",
            border: "none",
            padding: "8px 16px",
            color: "#fff",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Start Investing
        </button>
      </div>

      {/* Conditional Block 2 */}
      <div
        style={{
          textAlign: "center",
          borderTop: "1px solid #dee2e6",
          paddingTop: "90px",
          marginBottom: "3rem",
          color: "#6c757d",
        }}
      >
        <img
          src="media/images/positions.svg"
          alt="positionImage"
          style={{ width: "20%", marginTop: "-50px" }}
        />
        <p>Conditional message "depends on your Positions"</p>
        <button
          style={{
            backgroundColor: "#0d6efd",
            border: "none",
            padding: "8px 16px",
            color: "#fff",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Summary;
