import { useParams } from "react-router-dom";
import { OfferCardDetails } from "../data";
import { OfferCardProps } from "../types/types";
import OfferDetail from "../components/OfferDetail";

export default function Offer() {
  const { id } = useParams();

  const offer = OfferCardDetails.find(
    (card: OfferCardProps) => card.id === Number(id)
  );

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
