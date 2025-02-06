<<<<<<< HEAD
<<<<<<< HEAD
=======
// import React from "react";
>>>>>>> 115565764da8a3716fc4320dcf2300ffac7c23ba
=======
>>>>>>> f8a1e6a3b8c820033d185e26e1d048af2edef77c
import Card from "./Card";
import { cardDetails } from "../data";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-5">
      {cardDetails.map((card, index) => (
        <Link to={`/client/offers/${card.id}`}>
          <Card
            key={index}
            companyName={card.companyName}
            homePrice={card.homePrice}
            homeDescription1={card.homeDescription1}
            homeDescription2={card.homeDescription2}
          />
        </Link>
      ))}
    </div>
  );
}

export default Cards;
