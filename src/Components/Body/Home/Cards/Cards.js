import React from "react";
import axelar from "../../../../assets/images/Axelar.png";
import archway from "../../../../assets/images/archway.png";
import sui from "../../../../assets/images/sui.png";
import blast from "../../../../assets/images/blast.png";
import celestia from "../../../../assets/images/celestia.png";
import pica from "../../../../assets/images/pica.png";
import casper from "../../../../assets/images/Casper.png";
import calamari from "../../../../assets/images/Calamari.png";
import moonbeam from "../../../../assets/images/Moonbeam.png";
import moonriver from "../../../../assets/images/moonriver.png";
import marin from "../../../../assets/images/Marlin.png";
import medibloc from "../../../../assets/images/medibloc.png";
import kusama from "../../../../assets/images/kusama.png";
import Cere from "../../../../assets/images/cere.png";
import aleph from "../../../../assets/images/aleph.png";
import xx from "../../../../assets/images/xx.png";
import polkadex from "../../../../assets/images/polkadex.png";
import tgrade from "../../../../assets/images/tgrade.png";
import zeitgeist from "../../../../assets/images/zeitgeist.png";
import haqq from "../../../../assets/images/haqq.png";
import tenet from "../../../../assets/images/tenet.png";
import mina from "../../../../assets/images/minaprotocol.png";


const Cards = () => {
  return (
    <div>
      <section id="cards">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center card-header">
              <h2>We operate in these <span>ecosystems</span> </h2>
              <p>
                Reach out to us for any queries https://linktr.ee/brightlystake
              </p>
            </div>
          </div>
          <div className="row ">
          <div className="col-lg-3 col-md-6 text-center">
              <div className="card-box">
                <h4 className="card-title">Aleph Zero</h4>
                <img className="small" src={aleph}></img>
                <p>Aleph Zero is an enterprise-ready, peer-reviewed blockchain that's scalable, fast, and dev-friendly</p>
                <ul>
                  <li>
                    <a href="https://alephzero.subscan.io/validator/5EyDRLV7tjkK6bx7LETkpBc6fnwgF2zXYEVLrqMLqMNimEeT" target="_blank" rel="noopener noreferrer" className="btn-one">
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
                <h4 className="card-title">Archway</h4>
                <img className="small" src={archway}></img>
                <p>Archway helps devs to launch dapps globally while earning automatic on-chain rewards.</p>
                <ul>
                  <li>
                    <a href="https://www.mintscan.io/archway/validators/archwayvaloper14q6gk2fdhym8q58x2at9lqke4chuk46emtyvvn" target="_blank" rel="noopener noreferrer" className="btn-one">
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
                <h4 className="card-title">Blast</h4>
                <img className="small" src={blast}></img>
                <p>Decentralized Web3 infrastructure provider by efficiently employing 3rd party node providers</p>
                <ul>
                  <li>
                    <a href="https://blastapi.io/" target="_blank" rel="noopener noreferrer" className="btn-one">
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
            {/* <div className="col-lg-3 col-md-6 text-center">
              <div className="card-box">
                <h4 className="card-title">Celestia</h4>
                <img src={celestia}></img>
                <p>Celestia is a modular consensus and data network, where a blockchain can be deployed easily</p>
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
            </div> */}
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
                <h4 className="card-title">HAQQ</h4>
                <img src={haqq}></img>
                <p>Kusama is a scalable network of specialized blockchains built using Substrate </p>
                <ul>
                  <li>
                    <a href="https://haqq.explorers.guru/validator/haqqvaloper19as88jg6qywfu0uymqsvcmuvqck5nngjjr8q4e" target="_blank" rel="noopener noreferrer" className="btn-one">
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
                      Node 1
                    </a>
                  </li>
                  <li>
                    <a href="https://kusama.subscan.io/account/D5EsKZAPK3eeyA43U5p8F4WapBS6y5NThot1mUMErkvVasR" target="_blank" rel="noopener noreferrer" className="btn-two">
                      Node 2
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
                <h4 className="card-title">Mina</h4>
                <img src={mina}></img>
                <p>Mina is realizing the user-owned, decentralized web with programmable zk proofs.</p>
                <ul>
                  <li>
                    <a href="https://minascan.io/mainnet/validator/B62qkgy1rQQmSL91aFeFvrYi9ptqavvgVkUiPZHmy5tZacSupTTCGi6/delegations" target="_blank" rel="noopener noreferrer" className="btn-one">
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
                <h4 className="card-title">Picasso</h4>
                <img src={pica}></img>
                <p>Picasso is the infrastructure layer pioneering interoperable DeFi solutions.</p>
                <ul>
                  <li>
                    <a href="https://picasso.subscan.io/account/5tmpSYLWqN4rXkxct7MbZHvs1Enf3StXhYwA1rvnGq59ZHdf" target="_blank" rel="noopener noreferrer" className="btn-one">
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
                <h4 className="card-title">Sui</h4>
                <img src={sui}></img>
                <p>Sui makes digital asset ownership fast, private, secure, and accessible to everyone.</p>
                <ul>
                  <li>
                    <a href="https://explorer.sui.io/validator/0x59031a8ba47e04dade3eea9dba0c7ccf8ed3ab9d51d7561add640f687add04ed?network=mainnet" target="_blank" rel="noopener noreferrer" className="btn-one">
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
                    <a href="https://www.mintscan.io/tgrade/validators/tgrade154cvfyu85tduekt60ga8ydc45lc76w7yy6935n" target="_blank" rel="noopener noreferrer" className="btn-one">
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
                <h4 className="card-title">Tenet</h4>
                <img src={tenet}></img>
                <p>A multichain AI powered web3 wallet that is the gateway to crypto for non-technical users</p>
                <ul>
                  <li>
                    <a href="https://tenet.explorers.guru/validator/tenetvaloper1ce3uljxkzcvql0tu4tqudu0ccvdza0txn8rmpk" target="_blank" rel="noopener noreferrer" className="btn-one">
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
            <div className="col-lg-3 col-md-6 text-center">
              <div className="card-box">
                <h4 className="card-title">Zeitgeist</h4>
                <img src={zeitgeist}></img>
                <p>Zeitgeist is an evolving blockchain for prediction markets and futarchy.</p>
                <ul>
                  <li>
                    <a href="https://zeitgeist.subscan.io/account/dE2sXU3pwfeaDvJY13wo5WSRmt4wqWMZSsu7T5dEQdqUZcFr3" target="_blank" rel="noopener noreferrer" className="btn-one">
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
