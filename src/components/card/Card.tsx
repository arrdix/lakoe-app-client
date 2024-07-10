import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardImage from "./CardImage";
import CardSide from "./CardSide";
import React from "react";

export default function Card({ isActive }: { isActive: boolean }) {
  return (
    <div className="flex flex-row gap-3 rounded-md shadow p-2 w-full">
      <div className="w-32">
        <CardImage image="../../../public/shirt.png" />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <CardHeader text="KAOS BASIC COTTON KENARI - DUSTY ROSE [ COTTON COMBED 30S ]" />
        <CardBody price={50000} stock={20} sku="0219AKD192"></CardBody>
        <CardFooter />
      </div>
      <div>
        <CardSide isActive={isActive} />
      </div>
    </div>
  );
}
