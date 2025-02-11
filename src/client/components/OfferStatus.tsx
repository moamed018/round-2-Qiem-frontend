import React from "react";
import "../style/offerDetails.css";
import RequestDetails from "../../assets/request-details.png";
import { OfferStatusProps } from "../types/types";

function OfferStatus({ onClose, message }: OfferStatusProps) {
  const closeOverlay = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).id === "offer-status-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="offer-status-overlay"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={closeOverlay}
    >
      <div
        className="flex flex-col items-center bg-white gap-3 justify-center rounded-lg shadow-lg w-[500px] h-[300px]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={RequestDetails}
          alt="request details accept"
          className="w-[200px] h-[150px]"
        />
        <h2 className="" id="offer-status-header">{message}</h2>
        <div className="flex justify-between w-[80%]">
          <button id="offer-status-btn-approve" onClick={onClose}>
            تأكيد
          </button>
          <button
            id="offer-status-btn-close"
            className="px-4 py-2"
            onClick={onClose}
          >
            الغاء
          </button>
        </div>
      </div>
    </div>
  );
}

export default OfferStatus;
