import React from "react";
import Intro from "../../../../assets/images/Vector.png"

const Introduction = () => {
  return (
    <div>
      <section id="introduction">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="text-part">
                  <h6>Non-custodial Staking Service Providers</h6>
                  <h2>Stake with <span>Confidence</span> </h2>
                  <p>We provide validator services catering common people and institutions. Say 'Hi' in our socials</p>
                  <a href="#" className="btn btn-green">Contact us</a>
              </div>
            </div> 
            <div className="col-lg-6 col-md-6">
                <img src={Intro}></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Introduction;
