import React, { useState } from "react";
import "../style/offerDetails.css";
import RequestDetails from "../../assets/request-details.png";
import { OfferStatusProps } from "../types/types";
import OfferApprovable from "./OfferApprovable";

function OfferStatus({ onClose, message, status }: OfferStatusProps) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Controls OfferStatus visibility

  const closeOverlay = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).id === "offer-status-overlay") {
      onClose();
    }
  };

  return (
    <>
      {isVisible && (
        <div
          id="offer-status-overlay"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeOverlay}
        >
          <div
            className="flex flex-col items-center bg-white gap-3 justify-center rounded-lg shadow-lg w-[500px] h-[300px] p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={RequestDetails}
              alt="request details"
              className="w-[200px] h-[150px]"
            />
            <h2 className="text-lg font-bold">{message}</h2>
            <div className="flex justify-between w-[80%] mt-3">
              <button
                id="offer-status-btn-approve"
                className=""
                onClick={() => {
                  setIsConfirmed(true);
                  setIsVisible(false); // Hide OfferStatus when confirmed
                }}
              >
                تأكيد
              </button>
              <button
                id="offer-status-btn-close"
                className=""
                onClick={onClose}
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}

      {isConfirmed && (
        <OfferApprovable
          message={
            status === "accepted"
              ? "تمت عملية القبول بنجاح"
              : "تمت عملية الرفض بنجاح"
          }
          onClose={() => {
            setIsConfirmed(false);
            onClose(); // Ensure both overlays close
          }}
        />
      )}
    </>
  );
}

export default OfferStatus;
