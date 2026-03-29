import { Trash } from "lucide-react";
import React from "react";

const Cart = ({ cartModel }) => {
  return (
       <div className="flex items-center justify-between border border-info/10 rounded-lg p-4 shadow-lg">
      <div className="flex gap-4 items-center">
        <img
          src={cartModel.image}
          alt=""
          className="w-20 object-contain object-center rounded-md"
        />
        <div>
          <h3 className="text-lg font-semibold">{cartModel.title}</h3>
          <p className="text-sm text-gray-600">{cartModel.description}</p>
          <p className="text-sm text-gray-800">${cartModel.price}/month</p>
        </div>
      </div>
      <button
        className="btn text-red-500 bg-red-100"
      >
        <Trash className="w-4" />
      </button>
    </div>
  );
};

export default Cart;
