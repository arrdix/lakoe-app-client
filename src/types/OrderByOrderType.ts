import { CartByOrder } from "./CartByOrderType";

export type OrderByOrder = {
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
  invoiceNumber: number;
  cartId: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  cartByOrders?: CartByOrder;
};
