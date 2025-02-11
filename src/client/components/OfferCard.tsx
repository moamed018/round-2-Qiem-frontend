import React from "react";
import "../style/card.css";
import AcceptOffer from "./OfferStatus";

interface CardProps {
  companyName: string;
  homePrice: string;
  homeDescription1: string;
  homeDescription2: string;
}

const Card: React.FC<CardProps> = ({
  companyName,
  homePrice,
  homeDescription1,
  homeDescription2,
}) => {
  return (
    <div
      dir="rtl"
      className=" p-4 flex flex-col gap-4 rounded-lg bg-white card-container text-right"
    >
      {/* Header: Company Name + Price */}
      <div className="flex justify-between">
        <h2 className="card-name">{companyName}</h2>
        <p className="card-price">{homePrice}</p>
      </div>

      {/* Descriptions */}
      <p className="card-description">{homeDescription1}</p>
      <p className="card-subdescription">{homeDescription2}</p>

      {/* Buttons Section */}
      <div className="offers-btns flex flex-col gap-2 justify-between mt-3">
        <button className="offer-btn px-4 py-2 text-white rounded-md">
          عرض
        </button>

        {/* Accept & Reject Buttons */}
        <div className="flex gap-5">
          <button className="offer-accept-btn w-full">قبول</button>
          <button className="offer-refuse-btn px-3 py-2 w-full bg-red-500 text-white rounded-md">
            رفض
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
