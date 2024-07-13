import React from "react";
import { Button } from "../ui/button";

export default function DeliveryOptionCard() {
  return (
    <Button className=" bg-white w-full h-full rounded-sm  hover:bg-blue-50">
      <div className="flex items-center justify-between h-full w-full">
        <div>
          <img
            src="https://static.desty.app/desty-store/jnt.png"
            alt=""
            className="h-7"
          />
          <p className="text-gray font-thin">Tersedia untuk COD</p>
        </div>
        <div className="">
          <p className="text-blue-600">
            RP. 50.000
          </p>
        </div>
      </div>
    </Button>
  );
}
