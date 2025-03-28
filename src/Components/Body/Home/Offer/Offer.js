import { Carousel } from "react-bootstrap";
import React, { useState } from "react";
import marlin from "../../../../assets/images/Marlin-big.png";
import moonbeam from "../../../../assets/images/Moonbeam-big.png";
import search from "../../../../assets/images/search.png";
import axelar from "../../../../assets/images/axelar_big.png";
import walrus from "../../../../assets/images/Walrus-big.png";
import celestia from "../../../../assets/images/celestia-big.png";

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
                      <img src={celestia} alt="Celestia" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="text-box">
                      <h5>CELESTIA</h5>
                      <h2>RPC STATS</h2>
                      <p>We have a dashboard capturing the status of the RPCs every 5 minutes. We also capture the latency for an endpoint from 3 different parts of the world.</p>
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
                      <img src={marlin} alt="Marlin Protocol" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="text-box">
                      <h5>Marlin Protocol</h5>
                      <h2>MARLIN HISTORIC STATS FOR OPERATORS</h2>
                      <p>We worked with Marlin protocols team to integrate our historic stats page for every operator which is a useful tool that provides historic info on performance and returns.</p>
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
                      <img src={moonbeam} alt="Moonbeam Network" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="text-box">
                      <h5>Moonbeam Network</h5>
                      <h2>COLLATOR STATS</h2>
                      <p>We have a self-provided dashboard with historic information on blocks produced each day by collators and a list of revokes/decreases from delegators on each collator. Also, delegators can see all the collators they have delegated.</p>
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
                      <img src={walrus} alt="Axelar" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="text-box">
                      <h5>Walrus</h5>
                      <h2>OPERATOR STATS</h2>
                      <p>We have a dashboard that displays historical values for various metrics per operator, along with historical data for shard owners and overall system health.</p>
                      <a href="https://walrus-stats.brightlystake.com/" target="_blank" rel="noopener noreferrer" className="know-btn">
                        Link to site
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              {/* <Carousel.Item>
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="img-box">
                      <img src={sui} alt="Sui" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="text-box">
                      <h5>Sui</h5>
                      <h2>RPC STATS</h2>
                      <p>We have a dashboard explaining the current status of RPCs. This can help folks choose the best-performing RPC nodes provided to the community.</p>
                      <a href="https://sui-tools.brightlystake.com/" target="_blank" rel="noopener noreferrer" className="know-btn">
                        Link to site
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel.Item> */}
              <Carousel.Item>
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="img-box">
                      <img src={search} alt="More to Come" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="text-box">
                      <h5>MORE TO COME</h5>
                      <h2>...</h2>
                      <p>We are currently hard at work building the next one. If you have any interesting thoughts or collaboration opportunities, drop us a note at contact@brightlystake.com</p>
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
