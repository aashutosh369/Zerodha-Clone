import React, { useState, useEffect } from "react";
// import { positions } from "../data/data";

function Positions() {
  // db se data fetch kr ne ke liye
  const [positions, setPositions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/allPositions/")
      .then((res) => res.json())
      .then((resJsonData) => setPositions(resJsonData))
      .catch((err) => console.log("Position data not found!",err));
  }, []);

  const profitClassCss = "porfitClass";
  const lossClassCss = " lossClass";

  return (
    <div className="container" style={{ marginTop: "62px" }}>
      <h3> Positions ({positions.length})</h3>
      <div className="row">
        <table className="custom-table mt-3">
          <tr className="mb-3">
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th className="text-center">Chg.</th>
          </tr>
          {positions.map((stock, index) => {
            const netChng = parseFloat(stock.net);
            return (
              <tr>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg}</td>
                <td>LTP</td>
                <td
                  className={
                    stock.avg - stock.price > 0 ? profitClassCss : lossClassCss
                  }
                >
                  {(stock.avg - stock.price).toFixed(2)}
                </td>
                <td className={netChng > 0 ? profitClassCss : lossClassCss}>
                  {parseFloat(netChng)} %
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Positions;
