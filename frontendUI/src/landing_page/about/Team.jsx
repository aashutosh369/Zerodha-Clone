import React from "react";

function Team() {
  return (
    <div className="container mb-5 mt-5">
      <div className="row mb-5 border-top">
        <h1 className="mt-5 text-center">Developer Profile</h1>
      </div>

      <div className="row d-flex justify-content-center align-items-center flex-wrap text-center text-md-start">
        {/* IMAGE */}
        <div className="col-12 col-md-4 order-1 order-md-1 mb-3 mb-md-0 d-flex justify-content-center">
          <img
            src="media/images/ashutoshPhoto.png"
            alt="ASHUTOSH KUMAR"
            className="rounded-circle"
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
            }}
          />
        </div>

        {/* TEXT */}
        <div
          className="col-12 col-md-7 order-2 order-md-2 text-muted"
          style={{ lineHeight: "1.7", wordWrap: "break-word" }}
        >
          <p>
            I’m <b>Ashutosh Kumar</b>, a passionate B.Tech CSE (AI-ML) student and a
            self-driven full-stack developer. This project — a Zerodha clone —
            was independently conceptualized, designed, and developed by me as
            a learning-focused initiative. The goal was to replicate a
            real-world trading platform using modern web technologies, while
            ensuring responsive UI, clean code architecture, and scalable
            component design.
          </p>
          <p>
            Throughout this project, I handled everything — from frontend
            structure using React and Bootstrap, to routing with React Router,
            and Git-based version control. I focused on modular coding
            practices, reusable components, and pixel-perfect layouts to
            simulate a real trading interface. As a solo developer, this
            project reflects my ability to take ownership, solve problems
            independently, and deliver production-like results with attention
            to detail and clean UI/UX.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
