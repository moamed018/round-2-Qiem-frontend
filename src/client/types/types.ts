export interface HomeCardProps {
  id?: string;
  cityName: string;
  propertyAddress: string;
  propertyDescription: string;
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
