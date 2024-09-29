import React from "react";
import CarCard from "../CarCard";
import Form from "./Form";

function BookingModal({ car }: any) {
  return (
    <div>
      <div className="modal-box mr-[100px] mb-[1px] w-[80%] md:w-[100%]">
        <div className="border-b-[1px] pb-2 ">
          <h3 className=" text-[30px] font-light text-gray-400">
            Rent A Car Now!
          </h3>
        </div>
        <div>
          <div>
          <CarCard car={car} />
          </div>
          <div>
          <Form car={car}/>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default BookingModal;
