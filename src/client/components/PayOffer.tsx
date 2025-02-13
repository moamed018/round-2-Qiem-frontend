import { useParams } from "react-router-dom";
import { PaymentsCardDetails } from "../data";
import { PaymentsCardProps } from "../types/types";
import "../style/paymentPage.css";
import PayOfferDetails from "./PayOfferDetails";
import { useMemo } from "react";

function PayOffer() {
  const { id } = useParams();

  if (!id) {
    return <div>العرض غير متوفر</div>;
  }

  const paidOffer = useMemo(
    () => PaymentsCardDetails.find((card: PaymentsCardProps) => card.id === id),
    [id]
  );

  if (!paidOffer) {
    return <div>العرض غير متوفر</div>;
  }

  return <PayOfferDetails propertyPrice={paidOffer.propertyPrice} />;
}

export default PayOffer;
