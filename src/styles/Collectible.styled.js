import styled from "styled-components";

export const StyledCollectible = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;500;700&display=swap")
  a {
    color: #000;
  }
  .container {
    display: flex;
    font-family: "Manrope", sans-serif;
  }
  .container img {
    object-fit: cover;
  }

  .create-field {
    padding: 6rem;
    color: #000;
    width: 80%;
  }
  .back-btn {
    display: flex;
    align-items: center;
  }

  .create-field a {
    color: #000;
  }

  .back-btn h3 {
    font-weight: normal;
    font-size: 25px;
  }
  .back-btn h3:hover {
    color: #ffc30b;
  }

  .create-field h1 {
    font-size: 35px;
  }
  .create-field h2 {
    font-size: 20px;
    color: #939292;
    font-weight: 500;
    margin-bottom: 4rem;
  }

  .desc {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }

  .cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .desc-card {
    width: 200px;
    padding: 2rem;
    border: 1px solid #8f8f8f;
    border-radius: 10px;
    text-align: center;
    margin-top: 2rem;
    margin-right: 1rem;
  }

  .desc-card-profile {
    display: flex;
    margin-top: 2rem;
    align-items: center;
  }

  .animated-bg {
    background-image: linear-gradient(
      to right,
      #c4c4c4 0%,
      #edeef1 10%,
      #c4c4c4 20%,
      #c4c4c4 100%
    );
    background-size: 200% 100%;
    animation: bgPos 1s linear infinite;
  }

  .animated-bg-text {
    border-radius: 50px;
    display: inline-block;
    margin: 0;
    height: 10px;
    width: 100%;
  }
  .animated-bg-circle {
    border-radius: 100%;
    display: inline-block;
    margin: 0;
    height: 40px;
    width: 50px;
    margin-right: 1rem;
  }

  .create-btn {
    margin-top: 2rem;
    width: 45%;
  }

  .create-btn button {
    background: #ffc30b;
    border: none;
    padding: 0.5rem;
    width: 100%;
    border-radius: 5px;
    font-size: 1rem;
  }

  .create-btn button:hover {
    background: #494343;
    color: #fff;
  }

  @keyframes bgPos {
    0% {
      background-position: 50% 0;
    }

    100% {
      background-position: -150% 0;
    }
  }
  @media (max-width: 1024px) {
    .side-img {
      display: none;
    }

    .create-field {
      padding: 1.5rem;
    }
  }
`;
