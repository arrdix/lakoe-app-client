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

function CheckoutPage() {
  const hookForm = useForm<CheckoutDto>()
  const { handleSubmit } = hookForm

  return (
    <div className=" w-full h-full bg-white px-32 py-14">
      <h1 className="font-semibold text-3xl mb-10 px-2">Checkout</h1>

      <div className="flex  gap-4">
        <div className="flex flex-col gap-2 w-4/6">
          <div className="flex flex-col gap-2">
            <ContactInformation hookForm={hookForm}/>
            <ShippingAddress hookForm={hookForm} />
            <DeliveryMethods />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-2/6">
          <InsertVoucherModal />
          <PaymentSummary />
          <Note />
          <Button
            type="button"
            className="rounded-lg p-1 border=none bg-cyan px-14 py-6 w-full"
            onClick={(handleSubmit((data)=>{
              console.log(data)
            }))}
          >
            <p className="mx-2 text-md font-semibold">Bayar sekarang</p>
            <FaArrowRight size={20} className="text-white mr-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
