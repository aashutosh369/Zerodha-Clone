import React from "react";
import Menu from "./Menu";

function TopBar() {
  return (
    <div className="container d-flex p-3 border-bottom " style={{position:"fixed", backgroundColor:"#fff"}}>
      
        <div className="col-4 d-flex gap-3">
          
            <div className="col-5">NIFTY50</div>
            <div className="col-5">SENSEX</div>
          
        </div>
        <div className="col-8 ">
          <Menu />
        </div>
      </div>
   
  );
}

export default TopBar;
