export enum DealStatus {
  todo,
  toBeAgreed,
  inProgress,
  produced,
  done,
}

export interface Deal {
  id: number; // primary key
  customer_id: number; // foreign key
  name: string;
  price: number;
  status: DealStatus;
  note: string;
}

export interface Comment {
  id: number; // primary key
  deal_id: number; // foreign key
  content: string;
}

export interface Customer {
  id: number; // primary key
  name: string;
  email: string;
  avatar_url: string;
  from_source: string;
  deals: string[]; // relationship with deals
}

export interface Storage {}
