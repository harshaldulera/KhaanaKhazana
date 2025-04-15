export interface Donar {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  kycdoc: string;
  CusineType: string;
}

export interface NGO {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  kycdoc: string;
  pocName: string;
  pocPhoneNumber: string;
}

export interface Volunteer {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  currentLocation: string;
  kycdoc: string;
  availability: boolean;
}

export interface Transaction {
  id: number;
  foodDetails: Record<string, any>;
  servingQuantity: number;
  expiryDate: string;
  pickupLocation: string;
  iscoolingRequired: boolean;
  moreReq: string;
  rating: number;
  feedback: string;
  status: string;
  donar: Donar;
  ngo: NGO;
  volunteer: Volunteer;
}

export enum TransactionStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  PICKED_UP = 'PICKED_UP',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED'
} 