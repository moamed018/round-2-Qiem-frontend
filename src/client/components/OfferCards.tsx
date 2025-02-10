import Card from "./OfferCard";
import { OfferCardDetails } from "../data";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-5">
      {OfferCardDetails.map((card, index) => (
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
