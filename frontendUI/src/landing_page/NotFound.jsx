import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row mt-5">
        <h1 className="mt-5 text-center">404 Not Found</h1>
        <p className="mt-1 text-center ">
          The page you are looking for does not exist!
        </p>
        <Link aria-current="page" to="/" className="d-flex justify-content-center">
         <button className="btn btn-primary ">Go to Home Page</button>
        </Link>
      </div>
    </div>
  );
}
export default NotFound;
