import React, { useEffect, useState } from "react";
import { Form, FormContainer, Button } from "./CardDetails.style";
import { useNavigate } from "react-router-dom";

export default function CardDetails({ cardDetails }) {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setcvc] = useState("");

  //Error state for each input element
  const [formErrors, setFormErrors] = useState({});
  const [NameErr , setNameErr] = useState(false);
  const [cardNumberErr , setCardNumberErr] = useState(false);
  const [monthErr , setMonthErr] = useState(false);
  const [yearErr , setYearErr] = useState(false);
  const [cvcErr , setCvcErr] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    cardDetails({
      name,
      cardNumber,
      month,
      year,
      cvc,
    });
  }, [name, cardNumber, month, year, cvc]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/thankyou" , {replace: true}); 
    // if(NameErr === false && cardNumberErr === false && monthErr === false && yearErr === false && cvcErr == false){
  }

  const validation = (name, cardNumber, month, year, cvc) => {
    let err = {};
    const numberRegex = /\d/;
    const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if(!name){
      err.name = "Cardholder name can't be empty";
    }else if(numberRegex.test(name)){
      err.name = "Cardholder name can't contain numbers";
    }else if(specialChar.test(name)){
      err.name = "Cardholder name can't contain special charaters e.g. @, $, %,! etc"
    }

    if(!cardNumber){
      err.cardNumber = "Card number cannnot be empty";
    }else if (cardNumber.match(/^[A-Za-z]+$/)){
      err.cardNumber = "Card number can't contain letters"
    }else if (specialChar.test(cardNumber)){
      err.cardNumber = "Card number can't contain special characters e.g. @, $, %, ! etc"
    }

    if(!month){
      err.month = "Can't be blank";
     }else if (month.match(/^[A-Za-z]+$/)){
      err.month = "Can't contain letters"
    }else if (specialChar.test(month)){
      err.month = "Can't contain special characters e.g. @, $, %,c! etc";
    }else if(month < 1 || month > 12){
      err.month = "Month must be between 1 and 12."
    }

    if(!year){
      err.year = "Can't be blank"
    }else if (year.match(/^[A-Za-z]+$/)){
      err.year = "Can't contain letters"
    }else if (specialChar.test(year)){
      err.year = "Can't contain special characters e.g. @, $, %,c! etc";
    }

    if(!cvc){
      err.cvc = "cvc can't be empty";
    }else if(cvc.match(/^[A-Za-z]+$/)){
      err.cvc = "cvc can't contain letters";
    }else if(specialChar.test(cvc)){
      err.cvc = "cvc can't contain special characters e.g @, $, %, ! etc"
    }

    return err;
  }
  
  const formatCardNumber = (e) =>{
    const input = e.target.value.replace(/ /g, ""); //remove all the empty spaces in the input
    let inputNumbersOnly = input.replace(/\D/g, ""); //Get only digits

    const splitNumbers = inputNumbersOnly.match(/.{1,4}/g); //set an array of 4 digitd per element e.g. ["1356", "4646" ....]

    let finalFormat = "";
    if(splitNumbers){
      finalFormat = splitNumbers.join(" "); //Join all the splits with an empty space.
    }

    setCardNumber(finalFormat); //set the new card number
    const er = validation(name, cardNumber, month, year, cvc);
    if(er.cardNumber === "" || er.cardNumber === undefined){
      formErrors.cardNumber = "";
    }else{
      formErrors.cardNumber = er.cardNumber;
    }
  }   


  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Cardholder name
          <input
            type="text"
            placeholder="e.g. Jane Appleseed"
            // className={Object.keys(formErrors).length === 0 && formErrors.name === "" || formErrors.name === undefined ? "" : "red-border"} //One long way for red input borders
            className={NameErr === true ? formErrors && formErrors.name ? "red-border" : "" : ""}
            onBlur = {(e) => {
              const err = validation(name, cardNumber, month, year, cvc);
              setFormErrors(err);
              console.log(err); 
              console.log(err.name);
              if(err.name){
                setNameErr(true);
              }
              else{
                setNameErr(false)
              }
            }}
            value={name}
            onChange={(e) =>{
              setName(e.target.value);
              const er = validation(name, cardNumber, month, year, cvc);
              if(er.name === "" || er.name === undefined){
                formErrors.name = "";
              }else{
                formErrors.name = er.name;
              }
            }}
            required
          />
        </label>
        {NameErr === true ? <p className="error">{formErrors.name}</p> : ""}

        <label htmlFor="name">
          card number
          <input
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            minLength="19"
            maxLength="19"
            className={cardNumberErr === true ? formErrors && formErrors.cardNumber ? "red-border" : "" : ""}
            onBlur = {(e) => {
              const err = validation(name, cardNumber, month, year, cvc);
              setFormErrors(err);
              if(err.cardNumber){
                setCardNumberErr(true);
              }else{
                setCardNumberErr(false)
              }
            }}
            value={cardNumber}
            onChange={formatCardNumber}
            required
          />
        </label>
        {/* {formErrors && formErrors.cardNumber ? <p className="error">{formErrors.cardNumber}</p> : ""} */}
        {cardNumberErr === true ? <p className="error">{formErrors.cardNumber}</p> : ""}

        <div className="exp-cvc">
          <label id="exp" htmlFor="exp-date">
            exp. date (mm / yy)
          </label>

          <input
            type="text"
            placeholder="MM"
            minLength="2"
            maxLength="2"
            className={monthErr === true ? formErrors && formErrors.month ? "red-border mm" : "mm" : "mm"}
            onBlur = {(e) => {
              const err = validation(name, cardNumber, month, year, cvc);
              setFormErrors(err);
              if(err.month){
                setMonthErr(true);
              }else{
                setMonthErr(false)
              }
            }}
            value={month}
            onChange={(e) => {
              setMonth(e.target.value)
              const er = validation(name, cardNumber, month, year, cvc);
              if(er.month === "" || er.month === undefined){
                formErrors.month = "";
              }else{
                formErrors.month = er.month;
              }
            }}
            required
          />
          <input
            type="text"
            placeholder="YY"
            minLength="2"
            maxLength="2"
            className={yearErr === true ? formErrors && formErrors.year ? "red-border yy" : "yy" : "yy"}
            onBlur = {(e) => {
              const err = validation(name, cardNumber, month, year, cvc);
              setFormErrors(err);
              if(err.year){
                setYearErr(true);
              }else{
                setYearErr(false)
              }
            }}
            value={year}
            onChange={(e) => {
              setYear(e.target.value)
              const er = validation(name, cardNumber, month, year, cvc);
              if(er.year === "" || er.year === undefined){
                formErrors.year = "";
              }else{
                formErrors.year = er.year;
              }
            }}
            required
          />
        {monthErr === true || yearErr === true ?
        formErrors.month && formErrors.year ? 
        <p className="error exp-error">{formErrors.month}</p> : 
        !formErrors.month && formErrors.year ? <p className="error exp-error">{formErrors.year}</p> : 
        <p className="error exp-error">{formErrors.month}</p> : ""}

          <label id="cvc" htmlFor="cvcNumber">
            cvc
          </label>
          <input
            type="text"
            placeholder="e.g. 123"
            minLength="3"
            maxLength="3"
            className={cvcErr === true ? formErrors && formErrors.cvc ? "red-border cvcNo" : "cvcNo" : "cvcNo"}
            onBlur = {(e) => {
              const err = validation(name, cardNumber, month, year, cvc);
              setFormErrors(err);
              if(err.cvc){
                setCvcErr(true);
              }else{
                setCvcErr(false)
              }
            }}
            value={cvc}
            onChange={(e) => {
              setcvc(e.target.value)
              const er = validation(name, cardNumber, month, year, cvc);
              if(er.cvc === "" || er.cvc === undefined){
                formErrors.cvc = "";
              }else{
                formErrors.cvc = er.cvc;
              }
            }}
            required
          />
          {cvcErr === true ? <p className="error cvc-error">{formErrors.cvc}</p> : ""}

        </div>
        <Button>Confirm</Button>
      </Form>
    </FormContainer>
  );
}
