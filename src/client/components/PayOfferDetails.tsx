import PayOfferImg from "../../assets/payOfferImg.png";
import { useState } from "react";
import PaymentDetails from "./PaymentDetails";

interface PayOfferDetailsProps {
  propertyPrice: string;
}

function PayOfferDetails({ propertyPrice }: PayOfferDetailsProps) {
  const [isBtnClicked, setIsBtnClicked] = useState(false);

  const handleIsBtnClicked = () => {
    setIsBtnClicked(true);
  };

  return (
    <>
      {isBtnClicked ? (
        <PaymentDetails />
      ) : (
        <div
          className="flex flex-col md:flex-row py-10 justify-between "
          dir="ltr"
        >
          <img
            src={PayOfferImg}
            alt="payment imge"
            className="w-[300px] h-[250px]"
          />
          <div className="flex flex-col gap-4 text-right">
            <h2 id="pay-offer-header">عروض - تفاصيل العرض - المدفوعات</h2>
            <p className="text-lg">المبلغ المستحق</p>
            <div
              className="flex
          justify-center items-center shadow-lg width-[400px] h-[100px] text-xl"
              id="pay-offer-price-container"
            >
              <p className="mx-1">ريال</p>
              <p>{propertyPrice}</p>
            </div>
            <p className="text-xl font-bold">
              المبلغ مقدم مقابل خدمات شركة{" "}
              <span id="company-name-span">عقاركم</span>
            </p>

            <button id="pay-offer-btn" onClick={handleIsBtnClicked}>
              دفع
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default PayOfferDetails;
