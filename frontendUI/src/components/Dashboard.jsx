

import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import TopBar from "./TopBar";
import WatchList from "./WatchList";

function Dashboard() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const watchListStyle = {
    position: isMobile ? "relative" : "fixed",
    overflowY: "auto",
    marginTop: "62px",
    height: isMobile ? "auto" : "100vh",
    width: isMobile ? "100%" : "30%",
    marginLeft: isMobile ? "0" : "-38px",
    paddingRight: "15px",
    zIndex: 1,
    backgroundColor: "#f8f9fa",
  };

  const contentStyle = {
    marginLeft: isMobile ? "0" : "30%",
    padding: "20px",
    width: isMobile ? "100%" : "70%",
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: isMobile ? "block" : "flex", flexWrap: "nowrap" }}>
        <div style={watchListStyle}>
          <WatchList />
        </div>

        <div style={contentStyle}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

