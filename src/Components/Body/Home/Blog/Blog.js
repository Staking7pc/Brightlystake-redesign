import { Carousel } from "react-bootstrap";
import React, { useState } from "react";
import video from "../../../../assets/images/video.jpg";
import { FaPlay } from "react-icons/fa";

const Blog = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <section id="blog">
        <div className="container">
          <div className="row">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/taMJct5oeoI"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <h2>
                      Welcome to Brightlystake <span>Video Presentation</span>{" "}
                    </h2>
                    <p>
                      Investigationes demonstraverunt lectores legere me lius
                      quod ii legunt saepius, qui sequitur mutationem
                      consuetudium.
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <h2>
                      Welcome to Brightlystake <span>Video Presentation</span>{" "}
                    </h2>
                    <p>
                      Investigationes demonstraverunt lectores legere me lius
                      quod ii legunt saepius, qui sequitur mutationem
                      consuetudium.
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/taMJct5oeoI"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <h2>
                      Welcome to Brightlystake <span>Video Presentation</span>{" "}
                    </h2>
                    <p>
                      Investigationes demonstraverunt lectores legere me lius
                      quod ii legunt saepius, qui sequitur mutationem
                      consuetudium.
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/taMJct5oeoI"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
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

export default Blog;
