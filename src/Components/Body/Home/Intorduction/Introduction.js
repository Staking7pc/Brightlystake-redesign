import React from "react";
import Intro from "../../../../assets/images/Vector.png";

const Introduction = () => {
  return (
    <div>
      <section id="introduction">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="text-part">
                <h6>Non-custodial Staking Service Providers</h6>
                <h2>Stake with <span>Confidence</span></h2>
                <p>We actively validate more than 20 ecosystems currently, with few more in the pipeline. Our global presence ensures continuous availability 24x7.</p>
                <a href="#footer" className="btn btn-green">Contact us</a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <img src={Intro} alt="Introduction Image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Introduction;
