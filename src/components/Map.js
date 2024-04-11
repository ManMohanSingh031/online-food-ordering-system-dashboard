import React from 'react';

const Map = ({ origin, destination }) => {
  return (
    <div className="w-full md:w-[58%] rounded-lg mt-1 shadow-md float-right p-1 md:mr-4">
      <iframe      
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d82171.52572260443!2d79.10529131132594!3d21.131767168991136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin`}
        width="100%"
        height="460"
        allowfullscreen=""
        loading="lazy"
        title="Delivery Route Map"
        className='border-dashed border-2 border-green-700 rounded-lg'
      ></iframe>
    </div>
  );
};

export default Map;
