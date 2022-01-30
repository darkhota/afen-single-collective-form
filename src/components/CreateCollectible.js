import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { StyledCollectible } from "../styles/Collectible.styled";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const CreateCollectible = () => {
  const [selected, setSelected] = useState("Select");

  return (
    <div>
      <Layout>
        <StyledCollectible>
          <div className="container">
            <img src="/form-bg.png" alt="form" className="side-img" />
            <div className="create-field">
              <Link to="/">
                <div className="back-btn">
                  <span>
                    <img src="back.png" alt="" />
                  </span>{" "}
                  <h3> &nbsp; &nbsp;Go back</h3>
                </div>
              </Link>

              <h1>Create Collectible</h1>
              <h2>
                Select "Single" to create one unique collectible or "Multiple"
                to create more than one of the same item
              </h2>

              <div className="input-field">
                <Dropdown selected={selected} setSelected={setSelected} />
              </div>
              {selected === "Single" && (
                <div className="desc">
                  <p>
                    A “Single” collectible gives you the opportunity to have a
                    one of a kind collectible.
                  </p>
                  <div className="desc-card">
                    <img src="/dolphin.png" alt="" />
                    <div className="animated-bg animated-bg-text"></div>
                    <div className="animated-bg animated-bg-text"></div>
                    <div className="animated-bg animated-bg-text"></div>

                    <div className="desc-card-profile">
                      <div className="animated-bg animated-bg-circle"></div>
                      <div className="animated-bg animated-bg-text"></div>
                    </div>
                  </div>

                  <div className="create-btn">
                    <Link to="/create-form">
                      <button>create</button>
                    </Link>
                  </div>
                </div>
              )}

              {selected === "Multiple" && (
                <div className="desc">
                  <p>
                    A “Multiple” collectible gives you the opportunity to have a
                    multiple collectibles.
                  </p>
                  <div className="cards">
                    <div className="desc-card">
                      <img src="/dolphin.png" alt="" />
                      <div className="animated-bg animated-bg-text"></div>
                      <div className="animated-bg animated-bg-text"></div>
                      <div className="animated-bg animated-bg-text"></div>

                      <div className="desc-card-profile">
                        <div className="animated-bg animated-bg-circle"></div>
                        <div className="animated-bg animated-bg-text"></div>
                      </div>
                    </div>
                    <div className="desc-card">
                      <img src="/dolphin.png" alt="" />
                      <div className="animated-bg animated-bg-text"></div>
                      <div className="animated-bg animated-bg-text"></div>
                      <div className="animated-bg animated-bg-text"></div>

                      <div className="desc-card-profile">
                        <div className="animated-bg animated-bg-circle"></div>
                        <div className="animated-bg animated-bg-text"></div>
                      </div>
                    </div>
                  </div>

                  <div className="create-btn">
                    <Link to="/create-form">
                      <button>create</button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </StyledCollectible>
      </Layout>
    </div>
  );
};

export default CreateCollectible;
