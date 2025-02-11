import { OfferDetails } from "../types/types";
import "../style/offerDetails.css";
import pdfLogo from "/src/assets/pdf-logo.jpg";
import OfferStatus from "./OfferStatus";
import { useState } from "react";

function OfferDetail({ companyName, homePrice }: OfferDetails) {
  const [isOfferAccepted, setIsOfferAccepted] = useState(false);
  const [isOfferRefused, setIsOfferRefused] = useState(false);
  // const [offerStatusMessage, setIsOfferStatusMessage] = useState("");

  const handleAcceptOffer = () => {
    // Call API to accept the offer
    console.log("Offer Accepted");
    setIsOfferAccepted(true);
  };
  const handleRefuseOffer = () => {
    // Call API to reject the offer
    console.log("Offer Rejected");
    setIsOfferRefused(true);
  };

  return (
    <section dir="rtl" className="offer-detail-container max-w-[100%]">
      <h1 className="nav">عروض &gt; تفاصيل العرض</h1>
      <div className="details px-5 py-4 ">
        <h1 className="title">{companyName}</h1>
        <p className="description">
          اهلاً بك نحن شركة عقاركم للعقارات يمكنك الأطلاع علي ملف السيرة الذاتية
          الخاص بنا . نري ان هذا العقار يقع في مكان جيد ولكن عدد الغرف قليل
          بالنسبة للمساحه ، سنترك لك عرضنا.
        </p>
        <p className="price"> مبلغ التقييم : {homePrice} </p>
        <div className="file-download flex items-center px-4 gap-3">
          <p className="file-text">عرض الملف</p>
          <img
            src={pdfLogo}
            alt="PDF Logo"
            className="pdf-logo"
            width={30}
            height={30}
          />
        </div>
        {/* Accept & Reject Buttons */}
        <div className="flex gap-5">
          <button
            className="offer-accept-btn w-[150px]"
            onClick={handleAcceptOffer}
          >
            قبول
          </button>
          <button
            className="offer-refuse-btn px-3 py-2 w-[150px] bg-red-500 text-white rounded-md"
            onClick={handleRefuseOffer}
          >
            رفض
          </button>
        </div>
      </div>
      {isOfferAccepted && (
        <OfferStatus
          onClose={() => setIsOfferAccepted(false)}
          message="سوف يتم قبول الطلب بالفعل "
        />
      )}
      {isOfferRefused && (
        <OfferStatus
          onClose={() => setIsOfferRefused(false)}
          message="سوف يتم رفض الطلب بالفعل "
        />
      )}
    </section>
  );
}

export default OfferDetail;
