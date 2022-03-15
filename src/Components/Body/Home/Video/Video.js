import { Carousel } from "react-bootstrap";
import React, { useState } from "react";
import video from "../../../../assets/images/video.jpg";
import { FaPlay } from "react-icons/fa";

const Video = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <section id="video">
        <div className="container">
          <div className="row">
            <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <iframe width="100%" height="315" src="https://youtube.com/embed/p8ZMjMk_7aM" title="YouTube video player" allowFullScreen></iframe>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="text-part">
                      <h2>
                        All about staking with <span> Casper by Brightlystake</span>{" "}
                      </h2>
                      <p>In this video we have explained about how staking works in casper ecosystem, how often rewards are distributed etc.</p>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <iframe width="100%" height="315" src="https://youtube.com/embed/SuV1UU5GaGs" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="text-part">
                      <h2>
                        All about staking with <span> Moonriver by Brightlystake</span>{" "}
                      </h2>
                      <p>In this video we will talk about Inflation impact on rewards - Total Stake impact on reward - Commission - Minimum stake to get rewards
                         - Tools available for research - Strategies in staking and a lot more</p>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <iframe width="100%" height="315" src="https://youtube.com/embed/f2GnO4aPNms" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                  </div>
                  <div className="col-lg-6 col-md-6">
                  <div className="text-part">
                      <h2>
                        All about staking with <span> Moonbeam by Brightlystake</span>{" "}
                      </h2>
                      <p>In this video we will talk about Inflation impact on rewards - Total Stake impact on reward - Commission - Minimum stake to get rewards
                         - Tools available for research - Strategies in staking and a lot more</p>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
             
              <Carousel.Item>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <iframe width="100%" height="315" src="https://youtube.com/embed/uG9q1da02lM" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="text-part">
                      <h2>
                        How to stake POND <span> by Brightlystake</span>{" "}
                      </h2>
                      <p>In this video we explain how to transfer POND and explain how to stake in a step by step manner</p>
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

export default Video;
