import { useState } from "react";
import RequestCards from "../components/RequestCards";
import "../style/RequestsPage.css";
import { RequestCardProps } from "../types/types";
import RequestCardDetails from "../components/RequestCardDetails";

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
          className="fixed inset-0 flex items-center justify-center  z-50"
          onClick={closeOverlay} // Close when clicking outside
        >
          <div
            className="bg-white  rounded-lg shadow-lg max-w-sm relative max-h-screen"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <RequestCardDetails
              cityName={selectedCard.cityName}
              propertyDescription={selectedCard.propertyDescription}
              propertyType="عقار سكني"
              area="150م"
              district="حي النرجس"
              evaluationCompany="شركة الأحمدية"
              email="alahmdy55@yahoo.com"
              evaluationCost="12,000"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Requests;
