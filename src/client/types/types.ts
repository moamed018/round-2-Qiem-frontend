export interface HomeCardProps {
  id?: string;
  cityName: string;
  propertyAddress: string;
  propertyDescription: string;
  onDelete: () => void;
  onEdit: () => void;
}

export interface OfferCardProps {
  id?: number;
  companyName: string;
  homePrice: string;
  homeDescription1: string;
  homeDescription2: string;
}

export interface OfferDetails {
  companyName: string;
  homePrice: string;
}

export interface RequestCardProps {
  id?: string;
  cityName: string;
  propertyAddress: string;
  propertyDescription: string;
}
export interface RequestCardDetailsProps {
  id?: string;
  cityName: string;
  propertyDescription: string;
  propertyType: string;
  area: string;
  district: string;
  evaluationCompany: string;
  email: string;
  evaluationCost: string;
}

export interface OfferStatusProps {
  onClose: () => void;
  message: string;
}
