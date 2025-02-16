import "../style/RequestsPage.css";
import { RequestCardProps } from "../types/types";
import RequestCardImage from "../../assets/home-page-2.1.jpg";

const RequestCard: React.FC<RequestCardProps> = ({
  cityName,
  propertyAddress,
  propertyDescription,
  status
}) => {
  return (
    <div className="property-request-card w-[360px] h-[450px] px-2 py-3 flex flex-col gap-7 cursor-pointer">
       {status && (
        <span
          className={`status-badge ${
            status === "مقبول" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {status}
        </span>
      )}
      <div className="flex flex-col w-fit">
        <img src={RequestCardImage} alt="Property request card" />
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
