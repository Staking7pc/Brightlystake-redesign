import React from "react";
import axelar from "../../../../assets/images/Axelar.png";
import casper from "../../../../assets/images/Casper.png";
import calamari from "../../../../assets/images/Calamari.png";
import moonbeam from "../../../../assets/images/Moonbeam.png";
import moonriver from "../../../../assets/images/moonriver.png";
import marin from "../../../../assets/images/Marlin.png";
import medibloc from "../../../../assets/images/medibloc.png";
import kusama from "../../../../assets/images/kusama.png";
import Cere from "../../../../assets/images/cere.png";
import cheqd from "../../../../assets/images/cheqd.png";
import xx from "../../../../assets/images/xx.png";
import polkadex from "../../../../assets/images/polkadex.png";
import tgrade from "../../../../assets/images/tgrade.png";


const Cards = () => {
  return (
    <div>
      <section id="cards">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center card-header">
              <h2>We operate in these <span>ecosystems</span> </h2>
              <p>
                We also run nodes exclusively for people with enough tokens/coin
              </p>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="card-box">
                <h4 className="card-title">Axelar</h4>
                <img className="small" src={axelar}></img>
                <p>Axelar is a decentralized interoperability network connecting all blockchains</p>
                <ul>
                  <li>
                    <a href="https://axelarscan.io/validator/axelarvaloper1kkrp9ulfea5klffr7yjk0lat2yuxystgfzg6zu" target="_blank" rel="noopener noreferrer" className="btn-one">
                      Explorer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="btn-two">
                      More info
                    </a>
                  </li>
                </ul>
              </div>
            </div>
             <div className="col-lg-3 col-md-6 text-center">
              <div className="card-box">
                <h4 className="card-title">Calamari</h4>
                <img src={calamari}></img>
                <p>Calamari Network is a private layer built for the entire Kusama ecosystem</p>
                <ul>
                  <li>
                    <a href="https://sparta.calamari.systems/dmx7NaUig7rdhwTJcnj6VPFaeou4KsvTqkMTcvHz25LcZtNrT" target="_blank" rel="noopener noreferrer" className="btn-one">
                      Explorer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="btn-two">
                      More info
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="card-box">
                <h4 className="card-title">Casper</h4>
                <img src={casper}></img>
                <p>Casper is an open source blockchain optimized for enterprise and developer adoption </p>
                <ul>
                  <li>
                    <a href="https://cspr.live/validator/0128cb7b72438c54db7810cb552b347dc7c383259d3865b308706014375da11940" target="_blank" rel="noopener noreferrer" className="btn-one">
                      Explorer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="btn-two">
                      More info
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="card-box">
                <h4 className="card-title">Cere Network</h4>
                <img src={Cere}></img>
                <p>Cere helps media enterprises to improve long term user retention and content engagement </p>
                <ul>
                  <li>
                    <a href="https://stats.cere.network/validator/5GLVPP25cQSMdP5GNLpL88niXkxyVAXFddZsqGeuGnW1TbyX" target="_blank" rel="noopener noreferrer" className="btn-one">
                      Explorer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="btn-two">
                      More info
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="card-box">
                <h4 className="card-title">Cheqd</h4>
                <img src={cheqd}></img>
                <p>Cheqd enables individuals and organisations to fully control their personal data </p>
                <ul>
                  <li>
                    <a href="https://explorer.cheqd.io/validators/cheqdvaloper1a5kj47vhvffxxp4njvx5yeegx73gpurpsg35w8" target="_blank" rel="noopener noreferrer" className="btn-one">
                      Explorer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="btn-two">
                      More info
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="card-box">
                <h4 className="card-title">Kusama</h4>
                <img src={kusama}></img>
                <p>Kusama is a scalable network of specialized blockchains built using Substrate </p>
                <ul>
                  <li>
                    <a href="https://kusama.subscan.io/waiting/DPyccDy3aecJqo2DTpFUFpnQAeaSEj9hbrpEzUSJnScAXpR" target="_blank" rel="noopener noreferrer" className="btn-one">
                      Explorer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="btn-two">
                      More info
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="card-box">
                <h4 className="card-title">Marlin</h4>
                <img src={marin}></img>
                <p>An open protocol that provides a high-performance programmable network infrastructure for Web 3.0</p>
                <ul>
                  <li>
                    <a href="https://arb1.marlin.org/relay/operator" target="_blank" rel="noopener noreferrer" className="btn-one">
                      Explorer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="btn-two">
                      More info
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="card-box">
                <h4 className="card-title">Medibloc</h4>
                <img src={medibloc}></img>
                <p>Medibloc is a digital healthcare company aims to build a patient-centric healthcare data platform</p>
                <ul>
                  <li>
                    <a href="https://www.mintscan.io/medibloc/validators/panaceavaloper1w3ze2ulad0jq7zcps7kdwsadhlh9mc27nqt8du" target="_blank" rel="noopener noreferrer" className="btn-one">
                      Explorer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="btn-two">
                      More info
                    </a>
                  </li>
                </ul>
              </div>
            </div>            
            <div className="col-lg-3 col-md-6 text-center">
              <div className="card-box">
                <h4 className="card-title">Moonbeam</h4>
                <img src={moonbeam}></img>
                <p>Moonbeam makes it easy to build natively interoperable blockchain applications</p>
                <ul>
                  <li>
                    <a href="https://moonbeam.subscan.io/validator/0x7fA2033272db2E4116CE314fd789A3A148F2Ed55" target="_blank" rel="noopener noreferrer" className="btn-one">
                      Explorer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="btn-two">
                      More info
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="card-box">
                <h4 className="card-title">Moonriver</h4>
                <img src={moonriver}></img>
                <p>Moonriver provides a permanently incentivized canary network to Moonbeam</p>
                <ul>
                  <li>
                    <a href="https://moonriver.subscan.io/validator/0xbd7562319f1f0fd658e0cc4af5970ea45946b08f" target="_blank" rel="noopener noreferrer" className="btn-one">
                      Explorer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="btn-two">
                      More info
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="card-box">
                <h4 className="card-title">Polkadex</h4>
                <img src={polkadex}></img>
                <p>Polkadex is a peer to peer orderbook-based exchange for the DeFi ecosystem built on Substrate </p>
                <ul>
                  <li>
                    <a href="https://polkadex.subscan.io/validator/espoqJqnCyPZ6von8c9hSRTSY2iQLHMueUZye1vCdHQAF8xUp" target="_blank" rel="noopener noreferrer" className="btn-one">
                      Explorer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="btn-two">
                      More info
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="card-box">
                <h4 className="card-title">Tgrade</h4>
                <img src={tgrade}></img>
                <p>Tgrade helps create on-chain financial instruments for self-soverign groups</p>
                <ul>
                  <li>
                    <a href="https://tgrade.aneka.io/validators/tgrade154cvfyu85tduekt60ga8ydc45lc76w7yy6935n" target="_blank" rel="noopener noreferrer" className="btn-one">
                      Explorer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="btn-two">
                      More info
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="card-box">
                <h4 className="card-title">XX network</h4>
                <img src={xx}></img>
                <p>XX network is the first and only quantum-resistant and privacy-focused blockchain ecosystem </p>
                <ul>
                  <li>
                    <a href="https://dashboard.xx.network/nodes/_p9HuEbJbJOKudgJLIHloaBrbAmbKg6C_8tyy-seN9wC" target="_blank" rel="noopener noreferrer" className="btn-one">
                      Explorer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="btn-two">
                      More info
                    </a>
                  </li>
                </ul>
              </div>
            </div>
           

          </div>
        </div>
      </section>
    </div>
  );
};

export default Cards;
