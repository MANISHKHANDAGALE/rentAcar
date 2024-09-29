import { createBooking, getStoreLocations } from '@/Services/Index'
import { log } from 'console';
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { BookCreatedFlagContext } from '@/app/Context/BookCreatedFlagContext';
function Form({car}:any) {
const [storeLocation,setStoreLocation]=useState<any>([])
const {showToastMsg,setShowToastMsg}=useContext(BookCreatedFlagContext)
const [formValue,setFormValue]=useState(
  {
    location:'',
    pickUpDate:'',
    dropOffDate:'',
    pickUpTime:'',
    dropOffTime:'',
    contactNumber:'',
    userName:'Manish Khandagale',
    carId: ""
  }
)
useEffect(()=>{
if(car)
{
  setFormValue({
    ...formValue,
    carId: car.id
  })
}

},[car])

  useEffect(()=>{
    getStoreLocations_();
  },[])

  const getStoreLocations_ = async()=>{
    const result:any = await getStoreLocations();
    console.log(result);
    
    setStoreLocation(result?.storeLocations);
  }
  const handleChange = (e:any)=>{
setFormValue({
  ...formValue,
  [e.target.name] : e.target.value
})}

const handleSubmit = async () => {
  console.log(formValue);
  const res = await createBooking(formValue);
  console.log(res);

  if(res){
    setShowToastMsg(true)
  }
  
  
}
  
  return (
    <div>
    <div className="flex flex-col w-full mb-5">
      <label className="text-gray-400">PickUp Location</label>
      <select className="select 
      select-bordered w-full max-w-lg"
      name="location" 
      onChange={handleChange}
     >
        <option disabled selected>
          PickUp Location?
        </option>
        {/* {storeLocation &&
          storeLocation.map((loc: any, index: number) => (
            <option key={index}>{loc?.address}</option>
          ))} */}
          {storeLocation && storeLocation.map((loc:any,index:number)=>(
<option key={index}>{loc?.address}</option>
          ))}
      </select>
    </div>
    <div className="flex flec-col gap-5 mb-5">
      <div className="flex flex-col w-full">
        <label className="text-gray-400">Pick Up Date</label>
        <input
          type="date"
          // min={today}
          onChange={handleChange}
          placeholder="Type here"
          name="pickUpDate"
          className="input input-bordered w-full max-w-lg"
        />
      </div>
      <div className="flex flex-col w-full">
        <label className="text-gray-400">Drop Off Date</label>
        <input
          type="date"
          onChange={handleChange}
          placeholder="Type here"
              name="dropOffDate"
          className="input input-bordered w-full max-w-lg"
        />
      </div>
    </div>
    <div className="flex gap-5 ">
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">Pick Up Time</label>
        <input
          type="time"
          onChange={handleChange}
          name="pickUpTime"
          placeholder="Type here"
          className="input input-bordered w-full max-w-lg"
        />
      </div>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">Drop Off Time</label>
        <input
          type="time"
          name="dropOffTime"
          onChange={handleChange}
          placeholder="Type here"
          className="input input-bordered w-full max-w-lg"
        />
      </div>
    </div>

    <div className="flex flex-col w-full mb-5">
      <label className="text-gray-400">Contact Number</label>
      <input
        type="text"
        placeholder="Type here"
        onChange={handleChange}
        name="contactNumber"
        className="input input-bordered w-full max-w-lg"
      />
    </div>
    <div className="modal-action">
    <form method="dialog" className="">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn">Close</button>
        
      <button
        className="btn bg-blue-500 text-white
hover:bg-red-500"
          onClick={handleSubmit}
      >
        Save
      </button>
      </form>
    </div>
    
  </div>
  )
}

export default Form