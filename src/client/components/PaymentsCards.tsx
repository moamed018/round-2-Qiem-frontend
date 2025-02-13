import { useState } from "react"; // ✅ Import useState
import { PaymentsCardDetails } from "../data";
import PaymentCard from "./PaymentCard";
import { Link } from "react-router-dom";

function PaymentsCards() {
  return (
    <section className="flex flex-wrap gap-10 justify-center">
      {PaymentsCardDetails.map((card) => (
        <Link to={`/client/payments/${card.id}`}>
          <PaymentCard
            key={card.id}
            propertyAddress={card.propertyAddress}
            propertyPrice={card.propertyPrice}
            propertyDescription={card.propertyDescription}
          />
        </Link>
      ))}
    </section>
  );
}

export default PaymentsCards;
