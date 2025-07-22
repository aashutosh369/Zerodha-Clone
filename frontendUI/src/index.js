import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routers,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup.jsx";
import Login from "./landing_page/signup/Login.jsx";
import AboutPage from "./landing_page/about/AboutPage.jsx";
import ProductPage from "./landing_page/products/ProductPage.jsx";
import PricingPage from "./landing_page/pricing/PricingPage.jsx";
import SupportPage from "./landing_page/support/SupportPage.jsx";
import Navbar from "./landing_page/Navbar.jsx";
import Footer from "./landing_page/Footer.jsx";
import NotFound from "./landing_page/NotFound.jsx";

// dashboard layout
// import Dashboard from "./components/Dashboard.jsx";
import Home from "./components/Home.jsx";

// Dashboard Subpages
import Dashboard from "./components/Dashboard.jsx";
import Summary from "./components/Summary.jsx";
import Orders from "./components/Orders.jsx";
import Holdings from "./components/Holdings.jsx";
import Positions from "./components/Positions.jsx";
import Funds from "./components/Funds.jsx";
import Apps from "./components/Apps.jsx";

//importing protecting route
import ProtectedRoute from "./ProtectedRoute.jsx";

// import Home from "./components/Home.jsx";

function AppRoute() {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith("/home");
  return (
    <>
      {!isDashboardRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/product" element={<ProductPage />}></Route>
        <Route path="/pricing" element={<PricingPage />}></Route>
        <Route path="/support" element={<SupportPage />}></Route>

        {/* protected dashboard routes */}
        <Route path="/home" element={<Home />}>
          <Route
            index
            element={
              <ProtectedRoute>
                <Summary />
              </ProtectedRoute>
            }
          ></Route>
          {/* <Route path="dashboard" element={<Summary/>}></Route> */}
          <Route
            path="orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="holdings"
            element={
              <ProtectedRoute>
                <Holdings />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="positions"
            element={
              <ProtectedRoute>
                <Positions />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="funds"
            element={
              <ProtectedRoute>
                <Funds />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="apps"
            element={
              <ProtectedRoute>
                <Apps />
              </ProtectedRoute>
            }
          ></Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      {!isDashboardRoute && <Footer />}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppRoute></AppRoute>
  </BrowserRouter>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     <Navbar />
//     <Routes>
//       {/* after login -> dashboard index */}
//       {/* <Route path="/afterLogin" element={<Home />}></Route>  */}
//       <Route path="/" element={<HomePage />}></Route>
//       <Route path="/signup" element={<Signup />}></Route>
//       <Route path="/login" element={<Login />}></Route>
//       <Route path="/about" element={<AboutPage />}></Route>
//       <Route path="/product" element={<ProductPage />}></Route>
//       <Route path="/pricing" element={<PricingPage />}></Route>
//       <Route path="/support" element={<SupportPage />}></Route>
//       <Route path="/*" element={<NotFound />}></Route>
//       {/* Dashboard Routes (nasted) */}
//       <Route path="/home" element={<Home />}>
//         <Route index element={<Summary />}></Route>
//         <Route path="orders" element={<Orders />}></Route>
//         <Route path="holdings" element={<Holdings />}></Route>
//         <Route path="positions" element={<Positions />}></Route>
//         <Route path="funds" element={<Funds />}></Route>
//         <Route path="apps" element={<Apps />}></Route>
//       </Route>
//     </Routes>
//     <Footer />
//   </BrowserRouter>
// );
