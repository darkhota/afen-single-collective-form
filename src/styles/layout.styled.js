import styled from "styled-components";

export const StyledLayout = styled.div`
.fixed-p{
    position: fixed;
}
color:#e5e5e5;

li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  nav{
    background: transparent;
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
      color: #494343;
  }
  .navigation ul a:hover{
    color:#ffc30b;
  }
.search-box{
  background: #fff;
  border-radius: 10px;
  padding: 2px;
  border: 1px solid #e5e5e5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
  }

  .nav-btn.yellow button {
    background-color: #ffc30b;
  }

  

  .nav-btn.transparent button {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid #e5e5e5;
  }
  .nav-btn.transparent button:hover{
    background: #ffc30b;
    border: 1px solid #ffc30b;
  }
  .nav-toggle{
    diisplay: none;
}

.footer-container{
    background-color: #e8e8e8;
    color: #494343;
    padding: 4rem;
}

.footer-row {
    display: flex;
}
p, .footer-row h4{
    font-size: 12px;
}

.inner-col h4{
    margin-top: 2rem;
    margin-bottom: 3rem;
}
.inner-col-2 img{
    margin-left: -1rem;
}
.inner-col-2 p{
    margin-top: 1.5rem;
    width: 300px;
}


.footer-col-1{
    line-height: 1rem;
    width: 700px;
    margin-bottom: 1rem;
}

 .footer-col-2{
    line-height: 1rem;
}

.inner-flex{ display: flex;
}
.inner-col{
    width: 400px;
}

.footer-row ul{
    padding: 0;
    margin-right: 1rem;
}
.footer-row ul li{
    font-size: 12px;
    width: max-content;
}

.col-3{
    margin-top: 0.6rem !important;
}

.footer-col-3{
    margin-right: 4rem;
    line-height: 2rem;
    margin-top: -1.5rem;
}

.input-btn input{
    padding: 0.5rem;
    border: none;
    border-radius: 10px 0px 0px 10px;
    color: #C4C4C4
}

.input-btn button{
    background-color: #ffc30b;
    border: none;
    outline: none;
    padding: 0.5rem;
    border-radius: 0px 10px 10px 0px;
    color: #494343
}

  @media(max-width: 1024px){
    .nav-toggle{
        display:flex;
        width:50px;
        height:50px;
        align-items:center;
        justify-content:center;
        cursor:pointer;
        position: relative;
        z-index: 2;
       
    }

    .nav-toggle > .bar {
        position: relative;
        width: 32px;
        height: 2px;
        background: #e5e5e5;
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
        z-index: 1;
    }
    .navigation ul a{
      color: #fff;
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
        background: #000;
        border-radius: 2px;
        transition: all .45s ease-in-out
    }
    .nav-toggle.open > .bar::before, .nav-toggle.open > .bar::after {
      background: #fff;
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
        background: #000;
    }
    .nav-toggle.open > .bar{
      background: transparent;
    }

    .nav-toggle.open > .bar::before{
        width: 32px;
        transform: rotate(45deg) translate(26px, -26px)
    }
    .nav-toggle.open > .bar::after{
      transform: rotate(-45deg) translate(26px, 26px)
    }

    .footer-row {
        flex-wrap: wrap;
    }
    .inner-flex
    { 
        display: flex;
        flex-wrap: wrap;
    }
    .inner-col{
        width: 70%;
    }
  }
  @media(max-width: 1160px){
    .footer-row {
        flex-wrap: wrap;
    }
  }
`;
