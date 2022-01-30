import React, { useState } from "react";
import { StyledDropdown } from "../styles/dropdown.styled";

const Dropdown = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["Single", "Multiple"];

  return (
    <StyledDropdown>
      <div className="dropdown">
        <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>
          {selected}
          <span>
            <img src="/drop-down.png" alt="" />
          </span>
        </div>
        {isActive && (
          <div className="dropdown-content">
            {options.map(option => (
              <div
                key={option}
                onClick={e => {
                  setSelected(option);
                  setIsActive(false);
                }}
                className="dropdown-item"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </StyledDropdown>
  );
};

export default Dropdown;
