import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Holdings() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/allHoldings/")
      .then((res) => res.json())
      .then((holdings) => setHoldings(holdings))
      .catch((err) => console.log("Error in fetching holdings", err));
  }, []);

  const profitStyle = { color: "green", fontWeight: "bold" };
  const lossStyle = { color: "red", fontWeight: "bold" };

  let totalInvestment = 0;
  let currentValue = 0;
  holdings.forEach((stock) => {
    totalInvestment += stock.avg * stock.qty;
    currentValue += stock.price * stock.qty;
  });

  const chartData = {
    labels: holdings.map((stock) => stock.name),
    datasets: [
      {
        label: "Current Value ",
        data: holdings.map((stock) => (stock.price * stock.qty).toFixed(2)),
        backgroundColor: "#00CCDD",
        borderRadius: 5,
      },
      {
        label: "Invested Value ",
        data: holdings.map((stock) => (stock.avg * stock.qty).toFixed(2)),
        backgroundColor: "#96EFFF",
        borderRadius: 5,
      },
    ],
  };

  const chartOptions = {
    animation: {
      duration: 1000,
    },
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ marginTop: "62px", color: "#6c757d", padding: "0 20px" }}>
      <div style={{ marginTop: "20px" }}>
        <h3 style={{ marginBottom: "20px" }}>Holdings ({holdings.length})</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th style={{ textAlign: "center" }}>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((stocks, index) => {
              const profitOrLoss = (
                (stocks.price - stocks.avg) *
                stocks.qty
              ).toFixed(2);
              const netChng = parseFloat(stocks.net);
              const dayChng = parseFloat(stocks.day);
              return (
                <tr key={index} style={{ borderBottom: "1px solid #eee", lineHeight: "2.5" }}>
                  <td>{stocks.name}</td>
                  <td>{stocks.qty}</td>
                  <td>{stocks.avg}</td>
                  <td>{stocks.price}</td>
                  <td>{(stocks.qty * stocks.price).toFixed(2)}</td>
                  <td style={profitOrLoss > 0 ? profitStyle : lossStyle}>{profitOrLoss}</td>
                  <td style={netChng > 0 ? profitStyle : lossStyle}>{netChng} %</td>
                  <td style={{ ...(dayChng > 0 ? profitStyle : lossStyle), textAlign: "center" }}>
                    {dayChng} %
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div style={{ display: "flex", marginTop: "40px", justifyContent: "space-between" }}>
        <div>
          <h5>{totalInvestment.toFixed(2)}</h5>
          <p>Total investment</p>
        </div>
        <div>
          <h5 style={currentValue > totalInvestment ? profitStyle : lossStyle}>
            {currentValue.toFixed(2)}
          </h5>
          <p>Current value</p>
        </div>
        <div>
          <h5
            style={
              currentValue - totalInvestment > 0 ? profitStyle : lossStyle
            }
          >
            {(currentValue - totalInvestment).toFixed(2)}
          </h5>
          <p>P&L</p>
        </div>
      </div>

      <div
        ref={ref}
        style={{
          marginTop: "50px",
          transform: inView ? "translateY(0)" : "translateY(100px)",
          opacity: inView ? 1 : 0,
          transition: "all 0.8s ease-out",
          height: "400px",
        }}
      >
        {inView && <Bar data={chartData} options={chartOptions} />}
      </div>
    </div>
  );
}

export default Holdings;
