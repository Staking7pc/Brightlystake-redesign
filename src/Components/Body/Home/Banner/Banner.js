import React from "react";
import Bannerlogo from "../../../../assets/images/banner-logo.png";
import { BsTelegram, BsTwitter, BsDiscord } from "react-icons/bs";

const Banner = () => {
  return (
    <div>
      <section id="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 m-auto text-center">
              <img src={Bannerlogo} className="banner-logo" alt="Banner logo"></img>
              <h2>
                Welcome To <span>Brightlystake Ltd.</span>{" "}
              </h2>
              <h4>Reliable. Non-custodial. Validators.</h4>
              <h4>Member of <a href="https://linktr.ee/unitedbloc" target="_blank" rel="noopener noreferrer">UnitedBloc</a></h4>
              <ul className="icons">
                <li>
                  <a href="https://t.me/Brightlystake" target="_blank" rel="noopener noreferrer">
                    <BsTelegram />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/brightlystake" target="_blank" rel="noopener noreferrer">
                    <BsTwitter />
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/7jtYTQZz2w" target="_blank" rel="noopener noreferrer">
                    <BsDiscord />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
