import { useEffect, useState } from "react";

import "./App.css";
import BusinessCard from "./components/BusinessCard";
import UserInput from "./components/UserInput";

function App() {
  const [cardData, setCardData] = useState([]);
  const[ reload, setReload]= useState(0)
  useEffect(() => {
    fetch("http://localhost:4000/get")
      .then((res) => res.json())
      .then((data) => setCardData(data.cards));
  }, []);

  return (
    <>
      <UserInput setCardData={setCardData} />
      {
        cardData?.map((card)=>{
          return(
              <BusinessCard cardData= {cardData} setReload={setReload}setCardData={setCardData} id={card.id} name={card.name} description={card.description} intrests={card.intrests} linkedIn={card.linkedIn} twitter={card.twitter} instagram={card.instagram}/>
          )
        })
      }
    </>
  );
}

export default App;
