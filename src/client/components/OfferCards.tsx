import Card from "./OfferCard";
import { OfferCardDetails } from "../data";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className="flex flex-wrap gap-6 justify-center ">
      {OfferCardDetails.map((card) => (
        <Link to={`/client/offers/${card.id}`}>
          <Card
            key={card.id}
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
