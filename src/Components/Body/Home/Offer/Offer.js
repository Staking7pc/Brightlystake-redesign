import { Carousel } from "react-bootstrap";
import React, { useState } from "react";
import marlin from "../../../../assets/images/Marlin-big.png";
import moonbeam from "../../../../assets/images/Moonbeam-big.png";
import search from "../../../../assets/images/search.png";
import Zeitgeist from "../../../../assets/images/zeitgeist-big.png";
import axelar from "../../../../assets/images/Axelar.png";
import sui from "../../../../assets/images/sui.png";
import celestia from "../../../../assets/images/celestia.png";

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
                  <div className="col-lg-4 col-md-4">
                    <div className="img-box">
                      <img src={axelar} alt="Third slide" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="text-box">
                      <h5>AXELAR</h5>
                      <h2>VALIDATOR STATS</h2>
                      <p>We have a dashboard explaining how staking works in Axelar and the various factors that affect the returns for a delegator. Users can see the most accurate measure of APY calculations in our site and many more features to be added</p>
                      <a href="https://axelar.brightlystake.com/" target="_blank" rel="noopener noreferrer" className="know-btn">
                        Link to site
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel.Item>  
              <Carousel.Item>
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="img-box">
                      <img src={celestia} alt="Third slide" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="text-box">
                      <h5>CELESTIA</h5>
                      <h2>RPC STATS</h2>
                      <p>We have a dashboard capturing the status of the RPC's every 5 minutes. we also capture the latency for an endpoint from 3 differnent parts of the world</p>
                      <a href="https://celestia-tools.brightlystake.com/" target="_blank" rel="noopener noreferrer" className="know-btn">
                        Link to site
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel.Item>  
              <Carousel.Item>
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="img-box">
                      <img src={marlin} alt="Third slide" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="text-box">
                      <h5>Marlin Protocol</h5>
                      <h2>MARLIN HISTORIC STATS FOR OPERATORS</h2>
                      <p>We worked with Marlin protocols team to integrate our historic stats page for every operator which is a useful tool which provides historic info on performance and returns.</p>
                      <a href="https://marlin.brightlystake.com/analytics/0xbc47f4ae5c9dcbd422f80a7528c3f7dbd0ab5e63" target="_blank" rel="noopener noreferrer" className="know-btn">
                        Link to site
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="img-box">
                      <img src={moonbeam} alt="Third slide" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="text-box">
                      <h5>Moonbeam Network</h5>
                      <h2>COLLATOR STATS</h2>
                      <p>We have self provided dashboard with historic information on blocks produced each day by collators and list of revokes/decreases from delegators on each collator. Also, delegators can see all the collators they have delegated</p>
                      <a href="https://moonbeam.brightlystake.com/moonbeam/Dashboard" target="_blank" rel="noopener noreferrer" className="know-btn">
                        Link to site
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel.Item>    
              <Carousel.Item>
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="img-box">
                      <img src={sui} alt="Third slide" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="text-box">
                      <h5>Sui</h5>
                      <h2>RPC STATS</h2>
                      <p>We have a dashboard explaining the current staus of RPCs. This can help folks choose the best performing RPC nodes provided to the community</p>
                      <a href="https://sui-tools.brightlystake.com/" target="_blank" rel="noopener noreferrer" className="know-btn">
                        Link to site
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="img-box">
                      <img src={Zeitgeist} alt="Third slide" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="text-box">
                      <h5>Zeitgeist</h5>
                      <h2>COLLATOR STATS</h2>
                      <p>We have self provided dashboard with historic information on blocks produced each day by collators and list of revokes/decreases from delegators on each collator is also presented for folks to analyse.</p>
                      <a href="https://collatorstats.brightlystake.com/zeitgeist" target="_blank" rel="noopener noreferrer" className="know-btn">
                        Link to site
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel.Item>   
              <Carousel.Item>
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="img-box">
                      <img src={search} alt="Third slide" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="text-box">
                      <h5>MORE TO COME</h5>
                      <h2>...</h2>
                      <p>We are currently hard at work building the next one. If you have any interesting thought/collab opportunity drop us a note to contact@brightlystake.com</p>
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
