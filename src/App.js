import Cards from "./components/Cards";
import CardDetails from "./components/CardDetails";
import Thankyou from "./components/Thankyou";
import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  const [cardDetail, setCardDetail] = useState({})
  const cardDetails = (details) => {
    setCardDetail(details);
  }

  return (
    <HashRouter basename="/">
      <Cards cardDetail={cardDetail} />
      <Routes>
        <Route path="/" element={<CardDetails cardDetails={cardDetails} />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
