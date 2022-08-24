import React from 'react'
import { useNavigate } from "react-router-dom";
import { ThankyouContainer, Wrapper } from './Thankyou.style';
import { Button } from './CardDetails.style';
import complete from '../images/icon-complete.svg'

export default function Thankyou() {
  const navigate = useNavigate();

  const handlecontinue = (e) => {
    e.preventDefault();
    navigate("/", {replace: true});
  }

  return (
    <ThankyouContainer>
        <Wrapper>
          <img src={complete} alt="Icon complete"/>
          <h1>Thank You!</h1>
          <p>We've added your card details</p>
          <Button onClick={handlecontinue}>Continue</Button>
        </Wrapper>
    </ThankyouContainer>
  )
}
