// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Menu = () => {
//   //area for js logics

//   const [selectedMenu, setSelectedMenu] = useState(0);

//   const handleMenuClick = (index) => {
//     setSelectedMenu(index);
//   };

//   const menuClass = "unselectedMenuItem";
//   const activeMenuItem = "selectedMenuItem";

//   // js logic for page is above
//   return (
//     <div
//       className="container border-start "
//       style={{ position: "fixed", backgroundColor: "#fff" }}
//     >
//       <div className="row d-flex justify-content-end">
//         <div className="col-2">
//           <img
//             src="media/images/kite-logo.svg"
//             alt="KiteLogo"
//             style={{ width: "30px" }}
//           />
//         </div>
//         <div className="col-10 d-flex gap-3">
//           <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
//             <li style={{ width: "auto" }}>
//               <Link
//                 to="/home/dashboard"
//                 style={{ width: "auto", textDecoration: "none" }}
//                 onClick={() => handleMenuClick(0)}
//                 className={selectedMenu === 0 ? activeMenuItem : menuClass}
//               >
//                 Dashboard
//               </Link>
//             </li>
//             <li style={{ width: "auto" }}>
//               <Link
//                 to="/home/orders"
//                 style={{ width: "auto", textDecoration: "none" }}
//                 onClick={() => handleMenuClick(1)}
//                 className={selectedMenu === 1 ? activeMenuItem : menuClass}
//               >
//                 Orders
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/home/holdings"
//                 style={{ width: "auto", textDecoration: "none" }}
//                 onClick={() => handleMenuClick(2)}
//                 className={selectedMenu === 2 ? activeMenuItem : menuClass}
//               >
//                 Holdings
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/home/positions"
//                 style={{ width: "auto", textDecoration: "none" }}
//                 onClick={() => handleMenuClick(3)}
//                 className={selectedMenu === 3 ? activeMenuItem : menuClass}
//               >
//                 Positions
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/home/funds"
//                 style={{ width: "auto", textDecoration: "none" }}
//                 onClick={()=> handleMenuClick(4)}
//                 className={selectedMenu === 4 ? activeMenuItem : menuClass}
//               >
//                 Funds
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/home/apps"
//                 style={{ width: "auto", textDecoration: "none" }}
//                 onClick={() => handleMenuClick(5)}
//                 className={selectedMenu === 5 ? activeMenuItem : menuClass}
//               >
//                 Apps
//               </Link>
//             </li>
//           </ul>
//           <div className="profile d-flex gap-3">
//             <div className="avatar">ZU</div>
//             <p className="username">USERID</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu;

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
