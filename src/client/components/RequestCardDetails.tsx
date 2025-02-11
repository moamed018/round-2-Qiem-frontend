import "../style/RequestsPage.css";
import { RequestCardDetailsProps } from "../types/types";

const RequestCardDetails: React.FC<RequestCardDetailsProps> = ({
  cityName,
  propertyDescription,
  propertyType = "عقار سكني",
  area = "150م",
  district = "حي النرجس",
  evaluationCompany = "شركة الأحمدية",
  email = "alahmdy55@yahoo.com",
  evaluationCost = "12,000",
}) => {
  return (
    <div className="property-request-card w-full  p-2 flex flex-col gap-4 cursor-pointer">
      <img
        src="/src/assets/home-page-2.1.jpg"
        alt="Property request card"
        className="w-full h-[200px]"
      />
      <p className="property-description">{propertyDescription}</p>
      <div className="flex flex-col gap-1">
        <p className="request-card-details-header">النوع</p>
        <p className="block"> {propertyType}</p>

        <p className="request-card-details-header">المساحة</p>
        <p className="block">{area}</p>

        <p className="request-card-details-header">المدينة</p>
        <p className="block">{cityName}</p>

        <p className="request-card-details-header">المنطقة</p>
        <p className="block"> {district}</p>

        <p className="request-card-details-header">شركة التقييم</p>
        <p className="block"> {evaluationCompany}</p>

        <p className="request-card-details-header">البريد الإلكتروني</p>
        <a href="mailto:alahmdy55@yahoo.com" className="text-blue-600 block">
          {email}
        </a>

        <p className="font-semibold block">تكلفة التقييم</p>
        <p className="block">{evaluationCost} ريال سعودي</p>
      </div>
    </div>
  );
};

export default RequestCardDetails;
