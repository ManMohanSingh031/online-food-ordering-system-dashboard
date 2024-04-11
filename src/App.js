import React from 'react';
import OrderStatusProgressBar from './components/OrderStatusProgressBar';
import OrderDetails from './components/OrderDetails';
import Map from './components/Map';
import { stages, order } from './constant';

const App = () => {
  return (
    <div className=" w-full h-screen">
    <OrderStatusProgressBar stages={stages} />
    <OrderDetails order={order} />
    <Map origin={order.pickupAddress} destination={order.deliveryAddress} />
  </div>
  );
};

export default App;
