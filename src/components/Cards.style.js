import styled from "styled-components";
import mobilebg from "../images/bg-main-mobile.png";
import desktopbg from "../images/bg-main-desktop.png";
import cardBack from "../images/bg-card-back.png";
import cardFront from "../images/bg-card-front.png";

export const Container = styled.div`
  min-width: 100%;
  height: 30%;
  background-image: url(${mobilebg});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  p:empty:not(:focus)::before {
    content: attr(data-placeholder);
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    background-image : url(${desktopbg});
    height: 100vh;
    min-width: 40%;
  }


  @media (min-width: 1024px) {
    min-width: 30%;
    max-width: 10%;
  }

  //Works this way too.
  /* p:empty::before {
    content: attr(data-placeholder);
  } */

`;

export const CardBack = styled.div`
  background-image: url(${cardBack});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  min-width: 70%;
  height: 20%;
  position: absolute;
  top: 4%;
  left: 25%;
  border-radius: 10px;

  p {
    width: fit-content;
    color: hsl(0, 0%, 100%);
    font-size: 8px;
    letter-spacing: 1px;
    position: relative;
    left: 80%;
    top: 45%;
  }

  //media Queries

  @media (min-width: 376px) {
    p{
        font-size: 12px;
    }
  }

  @media (min-width: 600px) {
    p{
      top: 43%;
      font-size: 15px;
    }
  }

  @media (min-width: 768px) {
    top: 47%;
    left: 10%;
    min-width: 40%;
    min-height: 25%;
    box-shadow: 10px 20px 50px 0px rgba(0,0,0,.5);

    p{
      top: 45%;
      font-size: 12px;
    }
  }

  @media (min-width: 900px) {
    p{
      top: 43.5%;
      font-size: 15px;
    }
  }

  @media (min-width: 1024px) {
    min-height: 28%;
    min-width: 38%;
    top: 51%;
    left: 12%;
    p{
      top: 45%;
      font-size: 15px;
    }
  }

  @media (min-width: 1300px) {
    min-height: 32%;
    /* min-width: 34%; */
    min-width: 515px;
    max-width: 515px;
    top: 55%;
    left: 12%;
    p{
      top: 45%;
      font-size: 15px;
    }
  }

  @media (min-width: 1600px){
      left: 16%;
    }

`

export const CardFront = styled.div`
  background-image: url(${cardFront});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  min-width: 70%;
  min-height: 20%;
  position: absolute;
  top: 15.5%;
  left: 5%;
  border-radius: 10px;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50% 30% 20%;
  /* box-shadow: 0px 40px 10px 0px hsl(270, 3%, 87%); */

  .card-logo {
    width: 50px;
    grid-column: 1 / span 2;
  }

  p {
    color: hsl(0, 0%, 100%);
    letter-spacing: 1.5px;
    font-weight: lighter;
  }

  .card-number {
    font-size: 15px;
    grid-column: 1 / span 2;
    align-self: end;
  }

  .card-holder {
    font-size: 8px;
    align-self: flex-end;
  }

  .exp-date {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    justify-self: end;
  }

  .exp-date > p {
    font-size: 8px;
  }

  //Media Queries

  @media (min-width: 376px) {
    
    .card-logo{
        width: 80px;
    }
    
    .card-number {
      font-size: 18px;
    }

    .card-holder,
    .exp-date > p{
        font-size: 10px;
    }
  }

  @media (min-width: 500px) {
    .card-number{
      font-size: 25px;
    }

    .card-holder,
    .exp-date > p{
      font-size: 12px;
    }
  }

  @media (min-width: 600px) {
    min-height: 23%;
    .card-number{
      font-size: 28px;
    }

    .card-holder,
    .exp-date > p{
      font-size: 13px;
    }
  }

  @media (min-width: 700px) and (max-width: 768px){
    min-height: 23%;
    padding: 1.5em;
    .card-number{
      font-size: 32px;
    }

    .card-holder,
    .exp-date > p{
      font-size: 14px;
    }
  }

  @media (min-width: 768px) {
      min-width: 40%;
      top: 20%;
      left: 3%;
      .card-number{
        font-size: 20px;
      }

    .card-holder,
    .exp-date > p{
      font-size: 10px;
    }
  }

  
  @media (min-width: 900px) {
      .card-number{
        font-size: 25px;
      }

    .card-holder,
    .exp-date > p{
      font-size: 12px;
    }
  }

  @media (min-width: 1024px) {
      min-width: 38%;
      min-height: 27%;
      top: 20%;
      left: 6%;
      .card-number{
        font-size: 30px;
      }

    .card-holder,
    .exp-date > p{
      font-size: 12px;
    }
  }

  @media (min-width: 1300px) {
      /* min-width: 34%; */
      min-height: 30%;
      min-width: 470px;
      max-width: 470px;
      padding: 1.5em;
      top: 20%;
      left: 6%;
      .card-number{
        font-size: 35px;
      }

    .card-holder,
    .exp-date > p{
      font-size: 15px;
    }

    @media (min-width: 1600px){
      left: 10%;
    }
  }

  

`
