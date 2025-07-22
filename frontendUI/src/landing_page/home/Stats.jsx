import React from "react";

function Stats () {
  return (
    <div className="container" id="statsContainer">
      <div className="row p-4" style={{ flexDirection: "row" }}>
        {/* Image section: Comes first on mobile due to order-first */}
        <div
          className="col-12 col-md-6 p-4 order-first order-md-last d-flex justify-content-center"
          style={{ textAlign: "center" }}
        >
          <img
            src="media/images/ecosystem.png"
            alt="StatsEcosystem"
            id="StatsEcosystem"
            style={{ maxWidth: "100%", height: "auto", marginBottom: "20px" }}
          />
        </div>

        {/* Text section */}
        <div
          className="col-12 col-md-6 p-4 order-last order-md-first"
          style={{ wordWrap: "break-word" }}
        >
          <h1 className="fs-2">Trust with confidence</h1>

          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.
          </p>

          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
          </p>

          <div className="statsLink mt-3" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <a href="">Explore our products <i className="fa-solid fa-arrow-right"></i></a>
            <a href="">Try Kite demo <i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
