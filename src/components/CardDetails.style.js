import styled from "styled-components";

export const FormContainer = styled.div`
    width: 100%;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
       /* width: 60%; */
    }
    

`
export const Form = styled.form`
    display: flex;
    min-height: 70%;
    flex-direction: column;
    justify-content: space-around;
    padding: 1em;

    label{
        text-transform: uppercase;
        font-size: 10px;
        letter-spacing: 1px;
        font-weight: 700;
    }

    input{
        width: 100%;
        border: none;
        border: 1px solid hsl(270, 3%, 87%);
        border-radius: 8px;
        padding: .8em .8em;
        margin: 1rem 0;  
    }

    input::placeholder{
        color: hsl(270, 3%, 87%);
        font-weight: 700;
    }

    input:focus{
        outline: none;
        border: 2px solid transparent;
        background: linear-gradient(#fff 0 0) padding-box, /*this is your white background*/
        linear-gradient(hsl(249, 99%, 64%) , hsl(278, 94%, 30%)) border-box;
    }

    .red-border{
        border: 2px solid hsl(0, 100%, 66%);
    }

    .exp-cvc{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap:.5em;
        margin-bottom: 1em;
    }

    .exp-cvc > #exp{
        grid-column: 1 / span 2;
    }

    .exp-cvc > #cvc{
        grid-row: 1;
        grid-column: 3;
    }

    .exp-cvc > .mm{
        grid-row: 2;
        grid-column: 1;
    }

    .exp-cvc > .yy{
        grid-row: 2;
        grid-column: 2;
    }

    .exp-cvc > .cvcNo{
        grid-row: 2;
        grid-column: 3 / span 2;
    }

    .error{
        color: hsl(0, 100%, 66%);
        margin-bottom: .5em;
        font-size: 14px;
        margin-top: -1em;
    }

    .exp-cvc > .exp-error{
        grid-row: 3;
        grid-column: 1 / span 2;
    }

    .exp-cvc > .cvc-error{
        grid-row: 3;
        grid-column: 3 / span 2;
    }

    @media (min-width: 376px) {
        input{
            font-size: 18px;
        }

        label{
            font-size: 15px;
        }
    }

    @media (min-width: 700px) and (max-width: 768px){
        margin-top: 3em;    
        input{
            font-size: 20px;
        }  
        
        label{
            font-size: 15px;
        }
        
    }

    @media (min-width: 768px){
        min-height: 50%;
        padding: 5em;
        margin-left: 1.6em;
        label{
            font-size: 12px;
        }
    }

    @media (min-width: 900px){
        margin-left: 4em;
    }

    @media (min-width: 1024px){ 
    max-width: 65%;
        margin-left: 12em;
       label{
        font-size: 15px;
       }
    }

    @media (min-width: 1200px){ 
    max-width: 60%;
    min-width: 60%;
        margin-left: 12em;
       label{
        font-size: 15px;
       }
    }
`

export const Button = styled.button`
    border: none;
    width: 100%;
    background-color: hsl(278, 68%, 11%);
    color: hsl(270, 3%, 87%);
    border-radius: 8px;
    padding: 1em 0;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;

    @media (min-width: 376px){
        font-size: 18px;
    }

    @media (min-width: 700px) and (max-width: 768px){
        font-size: 20px;
    }
`