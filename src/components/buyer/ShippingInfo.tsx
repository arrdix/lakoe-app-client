import VaBankCard from "../VaBankCard";
import ContactInformation from "./ContactInformation";
import InsertVoucherModal from "./InsertVoucherModal";
import Note from "./Note";
import PaymentMethods from "./PaymentMethods";
import PaymentSummary from "./PaymentSummary";
import ShippingAdress from "./ShippingAddress";

export default function ShippingInfo() {
  return (
    <div className="flex flex-col gap-2">
      <ContactInformation></ContactInformation>
      <ShippingAdress></ShippingAdress>
      <PaymentMethods/>
      <VaBankCard/>
      {/* <InsertVoucherModal/>
      <PaymentSummary/>
      <Note/> */}
    </div>
  );
}
