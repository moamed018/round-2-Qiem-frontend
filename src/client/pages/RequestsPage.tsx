import { useState } from "react";
import RequestCards from "../components/RequestCards";
import "../style/RequestsPage.css";
import { RequestCardProps } from "../types/types"; // Import the correct type
import RequestCard from "../components/RequestCard";

function Requests() {
  const [selectedCard, setSelectedCard] = useState<RequestCardProps | null>(
    null
  );

  /** Function to close the overlay when clicking outside */
  const closeOverlay = (event: React.MouseEvent<HTMLDivElement>) => {
    // Prevent closing if clicking inside the modal
    if ((event.target as HTMLElement).id === "request-overlay") {
      setSelectedCard(null);
    }
  };

  return (
    <div dir="rtl" className="flex flex-col gap-10 w-full px-5 py-10">
      <h1 className="request-header">طلبات - جميع العقارات</h1>
      <RequestCards onSelectCard={setSelectedCard} />

      {/* Overlay */}
      {selectedCard && (
        <div
          id="request-overlay"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeOverlay} // Close when clicking outside
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <RequestCard
              cityName={selectedCard.cityName}
              propertyAddress={selectedCard.propertyAddress}
              propertyDescription={selectedCard.propertyDescription}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Requests;
