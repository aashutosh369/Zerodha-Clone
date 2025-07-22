
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const baseLinkStyle = {
    width: "auto",
    textDecoration: "none",
    padding: "8px 12px",
    borderRadius: "4px",
    color: "#000",
    fontWeight: "500",
  };

  const selectedStyle = {
    ...baseLinkStyle,
    backgroundColor: "#e0f3ff",
    color: "#007bff",
    fontWeight: "600",
    borderBottom: "2px solid #007bff",
  };

  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: "#fff",
        width: "100%",
        padding: "10px 20px",
        zIndex: 1000,
        borderBottom: "1px solid #dee2e6",
      }}
    >
      <div
        style={{
          display: "flex",
          // justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div>
          <img
            src="media/images/kite-logo.svg"
            alt="KiteLogo"
            style={{ width: "30px" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "40px",
            marginLeft:"100px",
            flexWrap: "wrap",
          }}
        >
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              // gap: "20px",
              // justifyContent: "flex-end",
              margin: 0,
              padding: 0,
            }}
          >
            {[
              { label: "Dashboard", path: "/home/dashboard" },
              { label: "Orders", path: "/home/orders" },
              { label: "Holdings", path: "/home/holdings" },
              { label: "Positions", path: "/home/positions" },
              { label: "Funds", path: "/home/funds" },
              { label: "Apps", path: "/home/apps" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  onClick={() => handleMenuClick(index)}
                  style={
                    selectedMenu === index ? selectedStyle : baseLinkStyle
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              ZU
            </div>
            <p style={{ margin: 0, fontWeight: "500" }}>USERID</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
