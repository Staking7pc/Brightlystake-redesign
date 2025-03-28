import React from "react";
import axelar from "../../../../assets/images/Axelar.png";
import avail from "../../../../assets/images/avail.png";
import sui from "../../../../assets/images/sui.png";
import celestia from "../../../../assets/images/celestia.png";
import casper from "../../../../assets/images/Casper.png";
import moonbeam from "../../../../assets/images/Moonbeam.png";
import moonriver from "../../../../assets/images/moonriver.png";
import marin from "../../../../assets/images/Marlin.png";
import kusama from "../../../../assets/images/kusama.png";
import aleph from "../../../../assets/images/aleph.png";
import polkadot from "../../../../assets/images/polkadot.png";
import peaq from "../../../../assets/images/peaq.png";
import haqq from "../../../../assets/images/haqq.png";
import krest from "../../../../assets/images/krest.png";
import dym from "../../../../assets/images/dym.png";
import click from "../../../../assets/images/click.png";
import walrus from "../../../../assets/images/walrus.jpg";
import bera from "../../../../assets/images/Bera.png";


const Cards = () => {
  return (
    <div>
      <section id="cards">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center card-header">
              <h2>We operate in these <span>ecosystems</span> </h2>
              <p>
                Reach out to us for any queries                 <a href="https://linktr.ee/brightlystake" target="_blank" rel="noopener noreferrer">
                  https://linktr.ee/brightlystake
                </a>
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

                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="card-box">
                <h4 className="card-title">Avail</h4>
                <img className="small" src={avail}></img>
                <p>Avail is the modular blockchain base layer for next-generation, trust-minimized applications.</p>
                <ul>
                  <li>
                    <a href="https://avail.subscan.io/validator/5FEWETswvmp118NDj83iWpp3Kkb95xxnHVbCz2xwc3BeSdc9" target="_blank" rel="noopener noreferrer" className="btn-one">
                      Explorer
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

                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="card-box">
                <h4 className="card-title">Berachain</h4>
                <img src={bera}></img>
                <p>Berachain uses Proof of Liquidity consensus mechanism to align liquidity and security </p>
                <ul>
                  <li>
                    <a href="https://hub.berachain.com/validators/0x964dd0632d0ed772dd0b5a269e9809be5b742df0ad4463552c7b51beef6baf6021360db60b0428ff1c4c38661c02b283" target="_blank" rel="noopener noreferrer" className="btn-one">
                      Explorer
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

                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="card-box">
                <h4 className="card-title">Celestia</h4>
                <img src={celestia}></img>
                <p>Celestia is a modular consensus and data network, where a blockchain can be deployed easily</p>
                <ul>
                  <li>
                    <a href="https://www.mintscan.io/celestia/validators/celestiavaloper19y52qzj4hxw0u68krfptkjlm77cvth8dgum7yu" target="_blank" rel="noopener noreferrer" className="btn-one">
                      Explorer
                    </a>
                  </li>

                </ul>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-6 text-center">
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

                </ul>
              </div>
            </div> */}
            <div className="col-lg-3 col-md-6 text-center">
              <div className="card-box">
                <h4 className="card-title">DYM</h4>
                <img src={dym}></img>
                <p>Dymension is a home for easily deployable and lightning fast app-chains, called RollApps.</p>
                <ul>
                  <li>
                    <a href="https://dym.fyi/validator/dymvalcons1gmv8yhkhnyyftvt6506emzjg5zyzqja04njnqg" target="_blank" rel="noopener noreferrer" className="btn-one">
                      Explorer
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

                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="card-box">
                <h4 className="card-title">Krest</h4>
                <img src={krest}></img>
                <p>Krest is the world's first and only simulation network for DePIN and the Economy of Things.</p>
                <ul>
                  <li>
                    <a href="https://krest.subscan.io/account/5DLdLmarYsYyQfxqX6iAzfMXPdWTtAGgMbgyrPWrsc2kuVV6" target="_blank" rel="noopener noreferrer" className="btn-one">
                      Explorer
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

                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="card-box">
                <h4 className="card-title">Peaq</h4>
                <img src={peaq}></img>
                <p>Peaq powers the Machine Economy, made up of real-world Web3 apps (DePINs) and devices that run on them. </p>
                <ul>
                  <li>
                    <a href="https://peaq.subscan.io/account/5EfAdDpkFxJUtFCfSyUaPSxWr5x3hM36TTa4fX9h6VCECoR4" target="_blank" rel="noopener noreferrer" className="btn-one">
                      Explorer
                    </a>
                  </li>

                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="card-box">
                <h4 className="card-title">Polkadot</h4>
                <img src={polkadot}></img>
                <p>Polkadot enables cross-blockchain transfers of any type of data or asset, not just tokens. </p>
                <ul>
                  <li>
                    <a href="https://polkadot.subscan.io/waiting/1CUBGfKnpHCW1AZbdJGGj1dihn4QNZ623THYs59r6yuPEMq?tab=era" target="_blank" rel="noopener noreferrer" className="btn-one">
                      Explorer
                    </a>
                  </li>

                </ul>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-6 text-center">
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

                </ul>
              </div>
            </div> */}
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

                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="card-box">
                <h4 className="card-title">Walrus</h4>
                <img className="small" src={walrus}></img>
                <p>Walrus is a decentralized storage platform enabling publish, deliver, and program data onchain.</p>
                <ul>
                  <li>
                    <a href="https://walruscan.com/mainnet/operator/0x54bbd7a6fa94be11ae18aa9ed41ce7f282d981fc73060c14f69b0a35ce70f5ea" target="_blank" rel="noopener noreferrer" className="btn-one">
                      Explorer
                    </a>
                  </li>

                </ul>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-6 text-center">
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

                </ul>
              </div>
            </div> */}
            <div className="col-lg-3 col-md-6 text-center">
              <div className="card-box">
                <h4 className="card-title">More</h4>
                <img src={click}></img>
                <p>We also operate in few other ecosystems which is present on the next page</p>
                <ul>
                  <li>
                    <a href="/More" target="_blank" rel="noopener noreferrer" className="btn-one">
                      More
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
