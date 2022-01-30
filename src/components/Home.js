import React, { useState } from "react";

import { StyledHome } from "../styles/home.styled";

import { Link } from "react-router-dom";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledHome>
      <div className={`container ${isOpen && "fixed-p"}`}>
        <nav className="navigation">
          <ul className={` ${isOpen && "open"}`}>
            <li>
              <Link to="/">
                <div className="logo">
                  <img src="/afen.png" alt="" />
                </div>
              </Link>
            </li>
            <li>
              <div className="search-box">
                <img src="/search.png" alt="" />
                <input type="text" placeholder="Search Afen" />
              </div>
            </li>
            <li>
              <a href="" className="nav-link">
                Marketplace
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Staking
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Profile
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                AFEN
              </a>
            </li>
            |
            <li>
              <div className="nav-icon">
                <img src="/sun.png" alt="" />
              </div>
            </li>
            <li>
              <div className="nav-btn transparent">
                <button>Get Started</button>
              </div>
            </li>
            <li>
              <div className="nav-btn yellow">
                <button>Connect wallet</button>
              </div>
            </li>
          </ul>
          <div
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
          </div>
        </nav>

        <section className="hero">
          <div className="hero-bg"></div>
          <div className="hero-header">
            <h2>
              Explore, buy and sell spectacular NFTs in the{" "}
              <span>Marketplace</span>{" "}
            </h2>
          </div>

          <div className="hero-btn-container">
            <div className="hero-button purple">
              <button>Stake</button>
            </div>
            <div className="hero-button transparent">
              <Link to="/create-collectible">
                <button>Create</button>
              </Link>
            </div>
          </div>
        </section>

        <section className="drops">
          <div className="drops-header">
            <h2>Notable Drops</h2>
          </div>
          <div className="drops-content">
            <div className="drops-card">
              <div className="category">Collectibles</div>
              <div className="card-img-header card-img-header-drops">
                <img src="/nft-1.png" alt="hi" />
              </div>
              <div className="card-contents">
                <div className="card-profile">
                  <div className="profile-img">
                    <img src="/profile-1.png" alt="" />
                  </div>
                </div>

                <div className="artist-info">
                  <div className="artist-name">
                    <h4>Dwayne Johnson</h4>
                  </div>
                  <div className="artist-id">
                    <h3>Afen Bot_#004</h3>
                  </div>
                </div>
                <div className="bnb-price">
                  <h5>0.2BNB</h5>
                </div>

                <div className="drops-footer">
                  <div className="drop-price">
                    <h4>$56.98</h4>
                  </div>
                  <div className="drop-id">
                    <h5>3215</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="drops-card">
              <div className="category">Arts</div>
              <div className="card-img-header card-img-header-drops">
                <img src="/nft-2.png" alt="hi" />
              </div>

              <div className="card-contents">
                <div className="card-profile">
                  <div className="profile-img">
                    <img src="/profile-2.png" alt="" />
                  </div>
                </div>

                <div className="artist-info">
                  <div className="artist-name">
                    <h4>Dwayne Johnson</h4>
                  </div>
                  <div className="artist-id">
                    <h3>Afen Bot_#004</h3>
                  </div>
                </div>
                <div className="bnb-price">
                  <h5>0.2BNB</h5>
                </div>

                <div className="drops-footer">
                  <div className="drop-price">
                    <h4>$56.98</h4>
                  </div>
                  <div className="drop-id">
                    <h5>3215</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="drops-card">
              <div className="category">Arts</div>
              <div className="card-img-header card-img-header-drops">
                <img src="/nft-3.png" alt="hi" />
              </div>

              <div className="card-contents">
                <div className="card-profile">
                  <div className="profile-img">
                    <img src="/profile-3.png" alt="" />
                  </div>
                </div>

                <div className="artist-info">
                  <div className="artist-name">
                    <h4>Dwayne Johnson</h4>
                  </div>
                  <div className="artist-id">
                    <h3>Afen Bot_#004</h3>
                  </div>
                </div>
                <div className="bnb-price">
                  <h5>0.2BNB</h5>
                </div>

                <div className="drops-footer">
                  <div className="drop-price">
                    <h4>$56.98</h4>
                  </div>
                  <div className="drop-id">
                    <h5>3215</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="auction">
          <div className="drops-header">
            <h2>
              Live <span>Auction</span>{" "}
            </h2>
          </div>
          <div className="drops-content">
            <div className="drops-card">
              <div className="category">Collectibles</div>
              <div className="card-img-header">
                <img src="/auction-1.png" alt="hi" />
              </div>

              <div className="card-contents">
                <div className="card-profile card-profile-auction">
                  <div className="profile-img">
                    <img src="/profile-4.png" alt="" />
                  </div>
                </div>

                <div className="artist-info artist-info-auction">
                  <div className="artist-name">
                    <h4>0x653366C7f946f300f3...</h4>
                  </div>
                </div>
                <div className="bid-section">
                  <h5>Current Bid</h5>
                  <h5>Time Left</h5>
                </div>

                <div className="drops-footer">
                  <div className="drop-price">
                    <h4>1 BNB</h4>
                  </div>
                  <div className="time">
                    <h4>0:06:12</h4>
                  </div>
                </div>

                <div className="bid-btn">
                  <button>Bid</button>
                </div>
              </div>
            </div>

            <div className="drops-card">
              <div className="category">Arts</div>
              <div className="card-img-header">
                <img src="/auction-2.png" alt="hi" />
              </div>

              <div className="card-contents">
                <div className="card-profile card-profile-auction">
                  <div className="profile-img">
                    <img src="/profile-5.png" alt="" />
                  </div>
                </div>

                <div className="artist-info artist-info-auction">
                  <div className="artist-name">
                    <h4>Alex McQueen</h4>
                  </div>
                </div>
                <div className="bid-section">
                  <h5>Current Bid</h5>
                  <h5>Time Left</h5>
                </div>

                <div className="drops-footer">
                  <div className="drop-price">
                    <h4>2.5 BNB</h4>
                  </div>
                  <div className="time">
                    <h4>02:06:12</h4>
                  </div>
                </div>

                <div className="bid-btn">
                  <button>Bid</button>
                </div>
              </div>
            </div>

            <div className="drops-card">
              <div className="category">Arts</div>
              <div className="card-img-header">
                <img src="/auction-3.png" alt="hi" />
              </div>

              <div className="card-contents">
                <div className="card-profile card-profile-auction">
                  <div className="profile-img">
                    <img src="/profile-6.png" alt="" />
                  </div>
                </div>

                <div className="artist-info artist-info-auction">
                  <div className="artist-name">
                    <h4>Taylor Jake</h4>
                  </div>
                </div>
                <div className="bid-section">
                  <h5>Current Bid</h5>
                  <h5>Time Left</h5>
                </div>

                <div className="drops-footer">
                  <div className="drop-price">
                    <h4>1.03 BNB</h4>
                  </div>
                  <div className="time">
                    <h4 className="expired">Expired</h4>
                  </div>
                </div>

                <div className="bid-btn">
                  <button>Bid</button>
                </div>
              </div>
            </div>

            <div className="drops-card">
              <div className="category">Collectibles</div>
              <div className="card-img-header">
                <img src="/auction-4.png" alt="hi" />
              </div>
              <div className="card-contents">
                <div className="card-profile card-profile-auction">
                  <div className="profile-img">
                    <img src="/profile-7.png" alt="" />
                  </div>
                </div>

                <div className="artist-info artist-info-auction">
                  <div className="artist-name">
                    <h4>Michael Carson</h4>
                  </div>
                </div>
                <div className="bid-section">
                  <h5>Current Bid</h5>
                  <h5>Time Left</h5>
                </div>

                <div className="drops-footer">
                  <div className="drop-price">
                    <h4>2800 Afen</h4>
                  </div>
                  <div className="time">
                    <h4 className="expired">00:00:04</h4>
                  </div>
                </div>

                <div className="bid-btn">
                  <button>Bid</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </StyledHome>
  );
};

export default Home;
