import React from "react";
import useTrackOrder from "../Hooks/useTrackOrder";

const OrderDetails = () => {
  const { data } = useTrackOrder();
  if (data === undefined) {
    return "loading";
  }
  const order = data?.data;
  return (
    <div className="w-full md:w-[40%] float-left">
      <div className="p-4">
        <div className="text-lg p-2 font-semibold mb-2">
          Order Details
          <div className="text-sm  rounded-lg p-4 shadow-lg text-center">
            Your order will reach by:
            <br />
            <span className="text-lg text-green-700 ">
              {order?.actual_delivery_date_time}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 shadow-lg p-10">
          <div>
            <div className="font-semibold">Order Number</div>
            <div>{order?.order_id}</div>
          </div>
          <div>
            <div className="font-semibold">Payment Mode</div>
            <div>{order?.payment_mode}</div>
          </div>
          <div>
            <div className="font-semibold">Amount</div>
            <div>{order?.amount} TBH</div>
          </div>
          <div>
            <div className="font-semibold">Pickup Address</div>
            <div>{order?.apartment}, {order?.society}, {order?.landmark}, {order?.locality}, {order?.city}, {order?.state}, {order?.country}, {order?.postal_code}</div>
          </div>
          <div>
            <div className="font-semibold">Delivery Address</div>
            <div>{order?.hub?.apartment}, {order?.hub?.society}, {order?.hub?.landmark}, {order?.hub?.locality}, {order?.hub?.city}, {order?.hub?.state}, {order?.hub?.country}, {order?.hub?.postal_code}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
