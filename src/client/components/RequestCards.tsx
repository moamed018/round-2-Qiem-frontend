import RequestCard from "./RequestCard";
import { RequestCardProps } from "../types/types";
import { RequestCardDetails } from "../data";

type RequestCardsProps = {
  onSelectCard: (card: RequestCardProps) => void;
};

function RequestCards({ onSelectCard }: RequestCardsProps) {
  return (
    <section className="flex flex-wrap gap-10 justify-center">
      <div className="flex flex-wrap gap-6 justify-center p-5">
        {RequestCardDetails.map((card) => (
          <div key={card.id} onClick={() => onSelectCard(card)}>
            <RequestCard
              cityName={card.cityName}
              propertyAddress={card.propertyAddress}
              propertyDescription={card.propertyDescription}
              status={card.status}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default RequestCards;
