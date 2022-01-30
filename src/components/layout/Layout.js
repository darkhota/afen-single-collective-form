import React, { useState } from "react";
import { StyledLayout } from "../../styles/layout.styled";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledLayout>
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
                Resources
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Profile
              </a>
            </li>
            |
            <li>
              <div className="nav-icon">
                <img src="/moon.png" alt="" />
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

        {children}

        <footer className="footer-container">
          <div className="footer-row">
            <div className="footer-col-1">
              <h4>Lorem ipsum</h4>
              <div className="inner-flex">
                <div className="inner-col">
                  <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vitae venenatis aliquam enim, in nisl.
                  </h4>
                  <div className="input-btn">
                    <input type="text" placeholder="Your E-mail address" />
                    <button>Sign up</button>
                  </div>
                </div>
                <div className="inner-col-2">
                  <img src="afen.png" alt="" />
                  <p>
                    A leading hub for African Blockchain-related collaborations
                    with a focus on Decentralized Finance, Arts, Real Estate and
                    Education.
                  </p>
                </div>
              </div>
            </div>

            <div className="footer-col-3">
              <div className="col-header">
                <h3>Marketplace</h3>
              </div>

              <ul>
                <li>Government</li>
                <li>Mint art</li>
                <li>Get Started</li>
                <li>Auction</li>
              </ul>
            </div>

            <div className="footer-col-3">
              <div className="col-header">
                <h3>Wallet</h3>
              </div>

              <ul>
                <li>Colectibles</li>
                <li>Fund Wallet</li>
                <li>Profile</li>
                <li>Settings</li>
              </ul>
            </div>

            <div className="footer-col-3 col-3">
              <div className="col-header">
                <h3>Links</h3>
              </div>

              <ul>
                <li>Whitepaper</li>
                <li>Afen Token</li>
                <li>Partners</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </StyledLayout>
  );
};

export default Layout;
