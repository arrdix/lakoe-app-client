import React from 'react';
import { useLocation } from 'react-router-dom';
import ContactInformation from "@/components/buyer/ContactInformation";
import InsertVoucherModal from "@/components/buyer/InsertVoucherModal";
import Note from "@/components/buyer/Note";
import DeliveryMethods from "@/components/buyer/DeliveryMethods";
import PaymentSummary from "@/components/buyer/PaymentSummary";
import ShippingAddress from "@/components/buyer/ShippingAddress";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { CheckoutDto } from "@/dtos/CheckoutDto";
import { CreateOrderDto } from "@/dtos/OrderDto";
import axios from "axios";
import SimpleMap from "@/components/Map";

function CheckoutPage() {
  const hookForm = useForm<CreateOrderDto>();
  const hookForm2 = useForm<CheckoutDto>();
  const { setValue } = hookForm;

  setValue("invoiceNumber", "121233");
  setValue("serviceCharge", 300);
  setValue("receiverLatitude", 1);
  setValue("receiverLongtitude", 3);
  setValue("status", "ini status");
  setValue("price", 3000);

  const postCheckout = async (data: CreateOrderDto) => {
    try {
      const response = await axios.post("http://localhost:3000/order", data);
      console.log(response);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error;
      }

      throw error;
    }
  };

  const { handleSubmit } = hookForm;

  return (
    <div className=" w-full h-full bg-white px-20 py-14">
      <div className="flex gap-10">
        <div className="flex flex-col gap-2 w-4/6">
          <div className="flex items-center gap-6">
            <h1 className="font-semibold text-6xl mb-10 px-3">Checkout</h1>
            <img
              className="w-32 relative bottom-7"
              src="Add to Cart-amico.png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <ContactInformation hookForm={hookForm} />
            <ShippingAddress hookForm={hookForm} />
            <DeliveryMethods hookForm={hookForm2} />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-2/6 relative top-6">
          <PaymentSummary />
          <InsertVoucherModal />
          <Note hookForm={hookForm} />
          <Button
            type="button"
            className="rounded-lg p-1 border=none bg-cyan px-14 py-6 w-full"
            onClick={handleSubmit((data) => {
              console.log(data);
              postCheckout(data);
            })}
          >
            <p className="mx-2 text-md font-semibold">Bayar sekarang</p>
            <FaArrowRight size={20} className="text-white mr-2" />
          </Button>

          {/* <div className="w-96 h-96 bg-black">
            <SimpleMap />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
