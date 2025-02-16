import React from "react";
import { AiOutlineSecurityScan } from "react-icons/ai";
import "../style/offerDetails.css";

interface OfferApprovableProps {
  message: string;
  onClose: () => void;
}

function OfferApprovable({ message, onClose }: OfferApprovableProps) {
  const closeOverlay = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      (event.target as HTMLElement).id === "offer-status-approvable-overlay"
    ) {
      onClose();
    }
  };

  return (
    <div
      id="offer-status-approvable-overlay"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={closeOverlay}
    >
      <div
        className="flex flex-col items-center bg-white gap-3 justify-center rounded-lg shadow-lg w-[400px] h-[300px] p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex justify-center items-center text-5xl text-blue-500 mb-2 bg-red-500 rounded-full w-[130px] h-[130px]"
          id="offer-status-approval-logo-container"
        >
          <AiOutlineSecurityScan className="w-[48px] h-[48px]" />
        </div>
        <h2 className="text-xl font-semibold text-center">{message}</h2>
      </div>
    </div>
  );
}

export default OfferApprovable;
