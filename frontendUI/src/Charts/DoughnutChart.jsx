import React from "react";
import { watchlist } from "../data/data";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// doughnut chart ko page scroll hone pr animation dene ke liye npm"react-intersection-observer"
import { useInView } from "react-intersection-observer";

// Register chart component
ChartJS.register(ArcElement, Tooltip, Legend);

//for color generation
const generateColors = (count) => {
  const color = [];
  for (let i = 0; i < count; i++) {
    const hue = (i * 360) / count;
    color.push(`hsl(${hue},70%,60%)`);
  }
  return color;
};
// DoughnutChart creation
const DoughnutChart = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const data = {
    labels: watchlist.map((stock) => stock.name),
    datasets: [
      {
        label: "Price ",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: generateColors(watchlist.length),
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div
      ref={ref}
      style={{
        transform: inView ? "none" : "translateY(100px)",
        opacity: inView ? 1 : 0,
        transition: "all 0.8s ease-out",
      }}
    >
      {inView && <Doughnut data={data} options={options} />}
    </div>
  );
};

export default DoughnutChart;
