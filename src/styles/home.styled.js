import styled from "styled-components";

export const StyledHome = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200&display=swap');

font-family: 'Mulish', sans-serif;
color:#fff;

.fixed-p{
    position: fixed;
}

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  nav{
      background: transparent;
          position: absolute;
    z-index: 2;
    width: 100%;
    color; #fff;
  }
  h4, h5{
      margin: 0;
  }

  .navigation ul {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    align-items: center;
    background: transparent:
  }
  .navigation ul a {
      color: #fff;
      font-family: 'Manrope', sans-serif;
  }
  .navigation ul a:hover{
    color:#ffc30b;
  }
.search-box{
  background: #fff;
  border-radius: 10px;
  padding: 2px;
}
.search-box > img{
  margin-left: 5px;
}

  .search-box input {
    border-radius: 10px;
    width: 300px;
    padding: 0.3rem;
    border: none;
    outline: none;
  }

  .nav-btn button {
    padding: 0.8rem;
    border-radius: 10px;
    background-color: #fff;
    border: none;
    width: 150px;
    font-family: 'Manrope', sans-serif;
  }

  .nav-btn.yellow button {
    background-color: #ffc30b;
  }

  .nav-btn.transparent button {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid #e5e5e5;
  }

  .nav-btn.transparent button:hover{
    color:#fff;
    background:#ffc30b;
    border: 1px solid #ffc30b;
  }

  .nav-toggle{
      display: none;
  }

  .hero {
    padding: 1rem;
    background-color: #222751;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 80vh;
    position: relative;
    top: 0;
  }
  
//   .hero-bg{
//     background: url(/hero-bg.png) bottom left;
//     width: 100%;
//     position: absolute;
//     z-index: 0;
//     height: 100%;
//     background-repeat-y: no-repeat;
//   }

  .hero::before{
    content: "";
    opacity:0.4;
    background: url(/hero-bg.png) bottom ;
    position: absolute;
    background-repeat-y: no-repeat;
    height: 100%;
    width: 100%;
  }

  .hero-header {
    width: 720px;
    text-align: center;
    z-index: 1;
  }

  .hero-header h2 {
    font-size: 40px;
    color: #fff;
  }

  .hero-header span {
    color: #ffc30b;
  }

  .hero-btn-container {
    display: flex;
    z-index: 1;
  }

  .hero-button button {
    padding: 1rem;
    border-radius: 15px;
    color: #fff;
    background: transparent;
    border: none;
    width: 146px;
  }

  .hero-button.purple button {
    background-color: #4d55a6;
    margin-right: 1rem;
  }

  .hero-button.transparent button {
    border: 1px solid #4d55a6;
  }

  .hero-button.transparent button:hover{
    background-color: #4d55a6;
    // border: none
  }

  .drops{
      padding: 4rem;
      background: url("/nft-bg.png");
      background-size: 100% 60%;
      background-repeat: no-repeat;
    
  }

  .drops-header h2{
    color:  #222751;
    font-weight: 900;
    font-size: 32px;
  }

  .drops-header span {
      color: #4d55a6;
  }
.drops-content{
    display: flex;
    justify-content: space-evenly;
    
}
  .drops-card{
    border: 0.1px solid #e5e5e5;
    border-radius: 10px;
    margin-right: 1rem;
  }


  .card-profile{
    position: relative;
    top: -60px;
    left: 35%;
    border: 5px solid #fff;
    width: fit-content;
    border-radius: 50%;
    padding: 0.2rem;
  }
  .card-profile-auction {
    top: -40px;
  }

  .card-img-header{
    position: relative;
    top: 0;
    margin-top: -2.1rem;
    z-index: 0;
  }

  .card-img-header.card-img-header-drops img{
      width: 350px;
  }
  .artist-info{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -4rem;
  }
  .artist-info-auction {
    margin-top: -2rem;
  }
  .artist-name h4{
      color: #473c55;
      font-weight: 900;
  }

  .artist-id h3{
      color: #7f7f7f;
      font-weight: 800;
  }

  .bnb-price{
      padding-left: 1rem;
  }

  .drops-footer, .bid-section{
      padding: 0 1rem 1rem 1rem;
      display: flex;
      justify-content: space-between;
  }

  .drop-price h5, .bid-section h5{
      margin: 0;
  }

  .drop-price h5, .bnb-price  h5, .bid-section h5{
      color:rgba(71, 60, 85, 0.7);
  }
  .drop-price h4, .drop-id h5{
      color:#473C55;
  }

  .category{
      position: relative;
      top:0px;
      left: 0;
      color:#fff;
      padding: 0.5rem;
      background-color: #4d55a6;
      width: fit-content;
      border-radius: 10px 0px;
      z-index: 2;
  }

  .bid-section {
      margin-top: 2rem;
      margin-bottom: -0.5rem;
  }

  

  .bid-btn button {
      padding: 1rem;
      color: #fff;
      border: none;
      background-color: #4d55a6;
      width: 100%;
      border-radius: 0px 0px 10px 10px;
      font-size: 1rem;
  }

  .bid-btn button:hover{
    background: #494343;
  }
  .expired{
      color: #ea4e62;
  }

  .auction{ padding: 4rem;}

  .card-contents{
      background-color: #fff;
      border-radius: 0px 0px 10px 10px;
  }

  @media(max-width: 1024px){
    
      .hero-header{
          width:auto;
      }

    .drops-content{
      flex-wrap: wrap;
    }
      .drops-card{
        margin-bottom: 1rem;
      }

      .nav-toggle{
          display:flex;
          width:50px;
          height:50px;
          align-items:center;
          justify-content:center;
          cursor:pointer;
      }

      .nav-toggle > .bar {
          position: relative;
          width: 32px;
          height: 2px;
          background: #ffffff;
      }

      .navigation ul{
          position:absolute;
          display: flex;
          flex-direction: column;
          background: #4d55a6;
          left: 0;
          height: 100vh;
          transform: translateX(-100%);
          transition: all .45s;
          top: -1rem;
          justify-content: space-evenly;
      }
      .navigation ul.open {
          transform: translateX(0)
      }

      .navigation ul a::before {
          background: transparent;
      }

      .nav-toggle > .bar::before, .nav-toggle > .bar::after {
          content: "";
          position: absolute;
          height: 2px;
          background: #ffffff;
          border-radius: 2px;
          transition: all .45s ease-in-out
      }
      .nav-toggle > .bar::before{
        width: 25px;
        transform: translateY(-8px);
        right: 0;
      }
      .nav-toggle > .bar::after{
        width: 32px;
        transform: translateY(8px);
       
      }
      .nav-toggle > .bar {
          transform: translateX(10px);
          background: transparent;
      }

      .nav-toggle.open > .bar::before{
          width: 32px;
          transform: rotate(45deg) translate(26px, -26px)
      }
      .nav-toggle.open > .bar::after{
        transform: rotate(-45deg) translate(26px, 26px)
      }
  }
`;
