import { useState } from "react"; // ✅ Import useState
import { PaymentsCardDetails } from "../data";
import PaymentCard from "./PaymentCard";

function PaymentsCards() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  return (
    <section className="flex flex-wrap gap-10 justify-center">
      {PaymentsCardDetails.map((card) => (
        <div key={card.id} onClick={() => setSelectedCard(card.id)}>
          <PaymentCard
            propertyAddress={card.propertyAddress}
            propertyPrice={card.propertyPrice}
            propertyDescription={card.propertyDescription}
            isSelected={selectedCard === card.id}
          />
        </div>
      ))}
    </section>
  );
}

export default PaymentsCards;
