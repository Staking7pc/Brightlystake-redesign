import React from "react";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTwitter, BsYoutube, BsFillCalendar2EventFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 m-auto text-center">
            <h2>Contact <span>Us</span></h2>
            <ul className="footer-wrapper">
              <li>
                <a href="mailto:contact@brightlystake.com" className="footer-link flink" aria-label="Email us">
                  <MdEmail />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/brightlystake" className="footer-link tlink" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter">
                  <BsTwitter />
                </a>
              </li>
              <li>
                <a href="https://t.me/Brightlystake" className="footer-link telelink" target="_blank" rel="noopener noreferrer" aria-label="Join us on Telegram">
                  <FaTelegramPlane />
                </a>
              </li>
              <li>
                <a href="https://calendly.com/contact_brightlystake" className="footer-link youlink" target="_blank" rel="noopener noreferrer" aria-label="Schedule a meeting">
                  <BsFillCalendar2EventFill />
                </a>
              </li>
              <li>
                <a href="https://discord.gg/7jtYTQZz2w" className="footer-link dislink" target="_blank" rel="noopener noreferrer" aria-label="Join our Discord">
                  <FaDiscord />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UC_cGhzLzY0mADp0V-tGh55A" className="footer-link youlink" target="_blank" rel="noopener noreferrer" aria-label="Subscribe to our YouTube channel">
                  <BsYoutube />
                </a>
              </li>
            </ul>

            <div>
              <h6>Brightlystake Ltd. is a registered entity in BVI.</h6>
              <h6>Ⓒ 2024 Brightlystake Ltd. All Rights Reserved</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
