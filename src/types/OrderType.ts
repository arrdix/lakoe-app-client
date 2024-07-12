import { Carts } from "./CartType";

export type Order = {
  id: number;
  price: number;
  serviceCharge: number;
  status: string;
  receiverLatitude: number;
  receiverLongtitude: number;
  receiverDistrict: string;
  receiverPhone: number;
  receiverAddress: string;
  receiverName: string;
  receiverNumber: number;
  cartId: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  carts?: Carts;
};
