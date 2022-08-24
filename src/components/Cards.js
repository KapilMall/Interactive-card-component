import React from 'react'
import { Container, CardFront, CardBack } from './Cards.style'
import logo from '../images/card-logo.svg';

export default function Cards({cardDetail}) {
    return (
        <Container>
            <CardBack>
                <p className="cvc-number" data-placeholder='000'>{cardDetail.cvc}</p>
            </CardBack>
            <CardFront>
                <img className = "card-logo" src={logo} alt="card logo"/>
                <p className="card-number" data-placeholder='0000 0000 0000 0000'>{cardDetail.cardNumber}</p>
                <p className="card-holder" data-placeholder='Jane Appleseed'>{cardDetail.name}</p>
                <div className='exp-date'>
                    <p className="month" data-placeholder='00'>{cardDetail.month}</p>
                    <p className="forward-slash" data-placeholder='/'></p>
                    <p className="year" data-placeholder='00'>{cardDetail.year}</p>
                </div>
            </CardFront>
        </Container>
    )
}
