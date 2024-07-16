export type CreateOrderDto = {
  price: number;
  serviceCharge: number;
  status: string;
  receiverLatitude: number;
  receiverLongtitude: number;
  receiverDistrict: string;
  receiverVillage: string;
  receiverPhone: number;
  receiverAddress: string;
  receiverName: string;
  invoiceNumber: string;
  notes? : string;
};

export type UpdateOrderDto = {
  price?: number;
  serviceCharge?: number;
  status?: string;
  receiverLatitude?: number;
  receiverLongtitude?: number;
  receiverDistrict?: string;
  receiverPhone?: number;
  receiverAddress?: string;
  receiverName?: string;
  receiverNumber?: number;
};
