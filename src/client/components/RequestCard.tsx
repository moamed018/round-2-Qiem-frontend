import "../style/RequestsPage.css";
import { RequestCardProps } from "../types/types";

const RequestCard: React.FC<RequestCardProps> = ({
  cityName,
  propertyAddress,
  propertyDescription,
}) => {
  return (
    <div className="property-request-card w-[360px] h-[420px] p-2 flex flex-col gap-7 cursor-pointer">
      <div className="flex flex-col w-fit">
        <img src="/src/assets/home-page-2.1.jpg" alt="Property request card" />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="property-location">{cityName}</h2>
        <p className="property-address">{propertyAddress}</p>
        <p className="property-description">{propertyDescription}</p>
      </div>
    </div>
  );
};

export default RequestCard;
