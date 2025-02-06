import { useParams } from "react-router-dom";
import { cardDetails } from "../data";
import { CardProps } from "../types/types";
import OfferDetail from "../components/OfferDetail";

export default function Offer() {
  const { id } = useParams();

  const offer = cardDetails.find((card: CardProps) => card.id === Number(id));

  console.log(offer);
  if (!offer) {
    return <h1>Offer not found</h1>;
  }

  return (
    <div className="single-card-container">
      <OfferDetail
        companyName={offer.companyName}
        homePrice={offer.homePrice}
      />
    </div>
  );
}
