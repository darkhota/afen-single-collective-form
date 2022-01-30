import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import { StyledForm } from "../styles/createForm.styled";

const CreateForm = () => {
  const [img, setImg] = useState("");
  const [preview, setPreview] = useState("/art.png");

  useEffect(() => {
    if (img) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };

      reader.readAsDataURL(img);
    } else {
      setPreview("/art.png");
    }
  }, [img]);
  return (
    <div>
      <Layout>
        <StyledForm>
          <div className="form-header">
            <h1>CREATE SINGLE COLLECTION</h1>
            <div className="form-row">
              <form action="" className="form-container">
                <div className="form-field">
                  <p>UPLOAD FILE</p>
                  <div className="file-input-field">
                    <p>JPG, GIF, WEBP, MP4 . MAX ...MB</p>
                    <label htmlFor="file-upload" className="file-custom-upload">
                      CHOOSE FILE
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      accept="image/*"
                      onChange={event => {
                        const file = event.target.files[0];
                        if (file) {
                          setImg(file);
                        } else {
                          setImg(null);
                        }
                      }}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <p>VIEW ON MARKETPLACE</p>
                  <div className="select-input-field">
                    <input type="text" />
                    <img src="/drop-down.png" alt="" />
                  </div>
                </div>

                <div className="form-field">
                  <p>PRICE</p>
                  <div className="select-input-field">
                    <input
                      type="text"
                      placeholder="Enter price for one piece"
                    />
                    <img src="/drop-down.png" alt="" />
                  </div>
                </div>
                <div className="form-field">
                  <p>ROYALTIES</p>
                  <div className="select-input-field">
                    <input
                      type="text"
                      placeholder="Suggested: 0%, 10%, 20%. Maximum is 20%"
                    />
                    <div>%</div>
                  </div>
                </div>

                <div className="form-field">
                  <p>TITLE</p>
                  <div className="select-input-field">
                    <input type="text" placeholder="e.g “The Masterpiece”" />
                  </div>
                </div>

                <div className="form-field">
                  <p>DESCRIPTION</p>
                  <div className="select-input-field">
                    <input
                      type="text"
                      placeholder="e.g “It is more than what the eye meet”"
                    />
                  </div>
                </div>
                <div className="submit-btn">
                  <button>CREATE NFT</button>
                </div>
              </form>

              <div className="preview">
                <p>PREVIEW</p>
                <img src={preview} alt="" />
              </div>
            </div>
          </div>
        </StyledForm>
      </Layout>
    </div>
  );
};

export default CreateForm;
