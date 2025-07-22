import React from "react";

function Hero() {
  return (
    <div className="container mt-5 text-center">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <h1>Technology</h1>

          <h3 className="fs-4 text-muted mt-3">
            Sleek, modern and intuitive trading platforms
          </h3>

          <p className="text-muted mt-2">
            Check out our{" "}
            <a href="#" className="text-decoration-none">
              investment offerings{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
