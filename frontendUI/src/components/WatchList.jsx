import React, { useState, useEffect } from "react";
import { Tooltip, Grow } from "@mui/material";
// import { watchlist } from "../data/data";
import DoughnutChart from "../Charts/DoughnutChart";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

function WatchList() {
  // db se dsta fetch kr ne ke liye
  const [watchlist, setWatchlist] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/watchlistStocks").then((res) => res.json()).then((resData) => setWatchlist(resData)).catch((err) => console.log("Error in fetching data!",err));
  }, []);

  return (
    <div
      className="wraperDiv"
      style={{
        width: "95%",
        marginLeft: "10px",
        // marginTop: "62px",
        // backgroundColor: "red",
        // position: "fixed",
      }}
    >
      {/* <div
        className="container-fluid"
        style={{
          marginTop: "62px",
          position: "fixed",
          overflowY: "auo",
          height: "calc(100vh - 62px)",
        }}
      > */}
      {/* <div className="row"> */}
      {/* <div className="col-4"> */}
      <div className="searchBoxWatchList d-flex justify-content-center align-items-center">
        <button class="btn btn-outline-none" type="submit">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        <input
          class="form-control me-2 outline-none"
          type="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          aria-label="Search"
          id="search"
        />
        <span className="count">{watchlist.length}/50</span>
      </div>

      <ul className="list mt-4 mb-5">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

      {/* next content */}
      <div className="doughnut" style={{ marginBottom: "150px" }}>
        <DoughnutChart></DoughnutChart>
      </div>
      {/* </div> */}
      {/* </div> */}
      {/*  */}
      {/* </div> */}
    </div>
  );
}

export default WatchList;

const WatchListItem = ({ stock }) => {
  const downCss = "down";
  const upCss = "up";
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handlemouseEnter = (e) => {
    setShowWatchlistActions(true);
  };
  const handlemouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li
      onMouseEnter={handlemouseEnter}
      onMouseLeave={handlemouseLeave}
      className="itemHolder"
    >
      <div className="item">
        <p className={stock.isDown ? downCss : upCss}>{stock.name}</p>
      </div>
      <div className="itemInfo">
        <span className={stock.isDown ? downCss : upCss}>{stock.percent}</span>
        {stock.isDown ? (
          <KeyboardArrowDown className="down" />
        ) : (
          <KeyboardArrowUp className="up" />
        )}
        <span className={stock.isDown ? downCss : upCss}>{stock.price}</span>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  return (
    <span className="actions">
      <span>
        <Tooltip
          title="BUY (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="btn btn-sm btn-primary">Buy</button>
        </Tooltip>
        <Tooltip
          title="SELL (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="btn btn-sm btn-danger">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (Analytics)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="btn ">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="btn btn-sm btn-secondary">
            <MoreHoriz />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
