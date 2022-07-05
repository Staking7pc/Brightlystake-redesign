import { Carousel } from "react-bootstrap";
import React, { useState } from "react";
import marlin from "../../../../assets/images/Marlin-big.png";
import moonbeam from "../../../../assets/images/Moonbeam-big.png";
import search from "../../../../assets/images/search.png";
import Zeitgeist from "../../../../assets/images/zeitgeist-big.png";


const Offer = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <section id="offer">
        <div className="container">
          <div className="row">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="img-box">
                      <img src={marlin} alt="Third slide" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="text-box">
                      <h5>Marlin Protocol</h5>
                      <h2>MARLIN HISTORIC STATS FOR OPERATORS</h2>
                      <p>We worked with Marlin protocols team to integrate our historic stats page for every operator which is a useful tool which provides historic info on performance and returns. You can access the stats symbol from the official site for Marlin operators</p>
                      <a href="https://marlin.brightlystake.com/analytics/0xbc47f4ae5c9dcbd422f80a7528c3f7dbd0ab5e63" target="_blank" rel="noopener noreferrer" className="know-btn">
                        Link to site
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="img-box">
                      <img src={moonbeam} alt="Third slide" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="text-box">
                      <h5>Moonbeam Network</h5>
                      <h2>COLLATOR STATS</h2>
                      <p>We have self provided dashboard for collators and delegators to do analysis on collators performance. Informations such as historic information on blocks produced each day by collators and list of revokes/decreases from delegators on each collator is also presented for folks to analyse. Also, delegators can see all the collators they have delegated along with their realized apy's for the past 4 rounds.</p>
                      <a href="https://moonbeam.brightlystake.com/moonbeam/Dashboard" target="_blank" rel="noopener noreferrer" className="know-btn">
                        Link to site
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="img-box">
                      <img src={Zeitgeist} alt="Third slide" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="text-box">
                      <h5>Zeitgeist</h5>
                      <h2>COLLATOR STATS</h2>
                      <p>We have self provided dashboard for collators and delegators to do analysis on collators performance. Informations such as historic information on blocks produced each day by collators and list of revokes/decreases from delegators on each collator is also presented for folks to analyse.</p>
                      <a href="https://collatorstats.brightlystake.com/zeitgeist" target="_blank" rel="noopener noreferrer" className="know-btn">
                        Link to site
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel.Item>              
              <Carousel.Item>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="img-box">
                      <img src={search} alt="Third slide" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="text-box">
                      <h5>MORE TO COME</h5>
                      <h2>...</h2>
                      <p>We are currently hard at work building the next one. If you have any interesting thought/collab opportunity drop us a note to staking7pc@gmail.com</p>
                      <a href="#" className="know-btn">
                        Thank you!
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offer;
