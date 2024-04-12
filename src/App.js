import React from 'react';
import OrderStatusProgressBar from './components/OrderStatusProgressBar';
import OrderDetails from './components/OrderDetails';
import Map from './components/Map';
import { stages } from './utils/constant';

const App = () => {
  return (
    <div className=" w-full h-screen">
    <OrderStatusProgressBar stages={stages} />
    <OrderDetails/>
    <Map />
  </div>
  );
};

export default App;
