// import React from "react";
// import { Routes, Route, Outlet } from "react-router-dom";

// import Apps from "./Apps";
// import Funds from "./Funds";
// import Holdings from "./Holdings";

// import Orders from "./Orders";
// import Positions from "./Positions";
// import Summary from "./Summary";
// import TopBar from "./TopBar";
// import WatchList from "./WatchList";

// function Dashboard() {
//   return (
//     <div className="mainContainer container-fluid ">
//       <div className="row gx-0">
//         <div
//           className="watchListClass col-4"
//           style={{ position: "fixed",overflowY:"auto", marginTop:"62px",height:'100vh', marginLeft: "-38px" }}
//         >
//           <WatchList />
//         </div>

//         <div className="col-8 border-start ps-3 pt-3 dashboardHolder">
//           <Outlet />
//           {/* <Routes>
//             <Route exact path="/" element={<Summary />}></Route>
//             <Route path="/orders" element={<Orders />}></Route>
//             <Route path="/holdings" element={<Holdings />}></Route>
//             <Route path="/positions" element={<Positions />}></Route>
//             <Route path="/funds" element={<Funds />}></Route>
//             <Route path="/apps" element={<Apps />}></Route>
//           </Routes> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


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

