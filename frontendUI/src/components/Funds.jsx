import React from "react";
import { Link } from "react-router-dom";

function Funds() {
  return (
    <div className="container mb-5 text-muted" style={{ marginTop: "72px" }}>
      <div
        className="row d-flex align-items-center justify-content-end flex-wrap mb-4"
        style={{ gap: "10px" }}
      >
        <p
          className="mb-0"
          style={{ width: "auto", fontSize: "14px", marginRight: "10px" }}
        >
          Instant, zero-cost fund transfers with{" "}
          <img
            src="media\images\UPI.svg"
            alt="UPI"
            style={{ width: "60px" }}
          />
        </p>

        <Link style={{ width: "auto" }}>
          <button className="btn btn-sm btn-success">Add Funds</button>
        </Link>
        <Link style={{ width: "auto" }}>
          <button className="btn btn-sm btn-primary">Withdraw</button>
        </Link>
      </div>

      <div
        className="row d-flex justify-content-between"
        style={{ flexWrap: "wrap", gap: "30px" }}
      >
        {/* Equity Section */}
        <div style={{ flex: "1", minWidth: "300px", maxWidth: "100%" }}>
          <div
            className="d-flex align-items-center justify-content-between mb-2"
            style={{ flexWrap: "wrap", gap: "10px" }}
          >
            <h5 className="fs-3 mb-0">
              <i className="fa-solid fa-chart-pie"></i> Equity
            </h5>
            <div>
              <a
                href=""
                style={{
                  fontSize: "12px",
                  marginRight: "10px",
                  textDecoration: "underline",
                }}
              >
                View statement
              </a>
              <a
                href=""
                style={{ fontSize: "12px", textDecoration: "underline" }}
              >
                Help
              </a>
            </div>
          </div>

          <table className="mb-4" style={{ lineHeight: "2.5", width: "100%" }}>
            <tbody>
              <tr>
                <td>Available margin</td>
                <td>0.00</td>
              </tr>
              <tr>
                <td>Used margin</td>
                <td>0.00</td>
              </tr>
              <tr>
                <td>Available cash</td>
                <td>0.00</td>
              </tr>
            </tbody>
          </table>

          <div className="border p-3 mb-5" style={{ lineHeight: "2" }}>
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td>Opening balance</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>Payin</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>Payout</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>SPAN</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>Delivery margin</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>Exposure</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>Options premium</td>
                  <td>0.00</td>
                </tr>
                <tr className="border-top">
                  <td>Collateral (Liquid funds)</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>Collateral (Equity)</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>Total collateral</td>
                  <td>0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Commodity Section */}
        <div style={{ flex: "1", minWidth: "300px", maxWidth: "100%" }}>
          <div
            className="d-flex align-items-center justify-content-between mb-2"
            style={{ flexWrap: "wrap", gap: "10px" }}
          >
            <h5 className="fs-3 mb-0">
              <i className="fa-solid fa-droplet"></i> Commodity
            </h5>
            <div>
              <a
                href=""
                style={{
                  fontSize: "12px",
                  marginRight: "10px",
                  textDecoration: "underline",
                }}
              >
                View statement
              </a>
              <a
                href=""
                style={{ fontSize: "12px", textDecoration: "underline" }}
              >
                Help
              </a>
            </div>
          </div>

          <table className="mb-4" style={{ lineHeight: "2.5", width: "100%" }}>
            <tbody>
              <tr>
                <td>Available margin</td>
                <td>0.00</td>
              </tr>
              <tr>
                <td>Used margin</td>
                <td>0.00</td>
              </tr>
              <tr>
                <td>Available cash</td>
                <td>0.00</td>
              </tr>
            </tbody>
          </table>

          <div className="border p-3" style={{ lineHeight: "2" }}>
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td>Opening balance</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>Payin</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>Payout</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>SPAN</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>Delivery margin</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>Exposure</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>Options premium</td>
                  <td>0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Funds;
