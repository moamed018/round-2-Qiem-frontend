import { PaymentsCardProps } from "../types/types";
import HomeImage from "../../assets/home-page-2.1.jpg";
import "../style/paymentPage.css";

function PaymentCard({
  propertyAddress,
  propertyPrice,
  propertyDescription,
}: PaymentsCardProps) {
  return (
    <section
      className={`flex flex-col gap-3 w-[350px] h-[450px] p-2 `}
      id="payment-card-container"
    >
      <img src={HomeImage} alt="payment card image" className="rounded-md " />
      <div className="flex flex-col gap-4">
        <h2 id="payment-card-address">عنوان العقار: {propertyAddress}</h2>
        <p id="payment-card-price">السعر: {propertyPrice} ريال</p>
        <p id="payment-card-description">{propertyDescription}</p>
      </div>
    </section>
  );
}

export default PaymentCard;
