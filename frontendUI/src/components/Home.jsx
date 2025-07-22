// import React from "react";
// import TopBar from "./TopBar";
// import Dashboard from "./Dashboard";
// import Summary from "./Summary";
// import Funds from "./Funds";
// function Home() {
//   return (
//     <div className="container" style={{margin:"0px", padding:"0px", marginLeft:"25px"}}>
//       <TopBar />
//       <Dashboard />
//     </div>
//   );
// }

// export default Home;
import React from "react";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";

function Home() {
  return (
    <div style={{ margin: "0px", padding: "0px", width: "100%", overflowX: "hidden" }}>
      <TopBar />
      <Dashboard />
    </div>
  );
}

export default Home;
