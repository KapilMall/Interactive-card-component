import styled from "styled-components";

export const ThankyouContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`

export const Wrapper = styled.div`
    min-height: 80%;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em 1em;
    
    img{
        width: 70px;
    }

    h1{
        text-transform: uppercase;
        color: hsl(278, 68%, 11%);
        margin-bottom: .4rem;
        margin-top: 2rem;
        letter-spacing: 2px;
    }

    p{
        color: hsl(279, 6%, 55%);
        font-weight: 500;
        margin-bottom: 2em;
        letter-spacing: 2px;
    }

    @media (min-width: 768px){
        min-width: 50%;
        margin-left: 20%;
        img{
            width: 110px;
        }

        h1{
            font-size: 2.5em;
            font-weight: 500;
        }

        p{
            width: 100%;
            text-align: center;
            font-size: 18px;
            letter-spacing: 1px;
        }

    }

    @media (min-width: 1024px){
        min-width: 50%;
        img{
            width: 110px;
        }

        h1{
            font-size: 2.5em;
            font-weight: 500;
        }

        p{
            width: 100%;
            text-align: center;
            font-size: 18px;
            letter-spacing: 2px;
        }

        Button{
            width: 80%;
        }
    }

    @media (min-width: 1500px){
        margin-left: 10%;
    }
`