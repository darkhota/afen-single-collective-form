import styled from "styled-components";

export const StyledDropdown = styled.div`
  .dropdown {
    width: 80%;
    user-select: none;
    position: relative;
    border: 1px solid #8f8f8f;
    border-radius: 10px;
  }

  .dropdown:hover,
  .dropdown:focus {
    border: 1px solid #ffd80b;
  }

  .dropdown .dropdown-btn {
    padding: 10px 15px;
    background: #fff;
    display: flex;
    color: #494343;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    border-radius: 10px;
  }

  .dropdown .dropdown-content {
    position: absolute;
    top: 110%;

    left: 0;

    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #494943;
    width: 100%;
    border-radius: 10px;
  }

  .dropdown .dropdown-content .dropdown-item {
    cursor: pointer;
    padding: 10px;
    transition: all 0.2s;
    border-radius: 10px 10px 0px 0px;
  }

  .dropdown .dropdown-content .dropdown-item:hover {
    background: #ffc30b;
  }
`;
