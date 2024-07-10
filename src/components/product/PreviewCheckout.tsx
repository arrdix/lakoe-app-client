import React from "react";
import { Button } from "../ui/button";

export default function PreviewCheckout() {
  return (
    <div className="w-full bg-white rounded-lg p-4 flex items-center flex justify-between">
      <Button variant="outline">Preview Halaman Checkout</Button>
      <div className="flex gap-2">
        <Button variant="outline" className="px-5">
          Cancel
        </Button>
        <Button variant="outline" className="bg-cyan text-white px-5 py-0">
          Save
        </Button>
      </div>
    </div>
  );
}
