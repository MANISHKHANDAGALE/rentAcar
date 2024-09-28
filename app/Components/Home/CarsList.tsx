import React, { useEffect, useState } from 'react'
import CarCard from './CarCard'
import BookingModal from './CarBooking/BookingModal'

function CarsList(props:any) {
  const [selectedcar,setSelectedcar]=useState<any>([])
  return (
    <>
    <div className='grid sm:grid-cols-1 md:grid-cols-3  ' >
     {props.carsList.map((car:any,index:number)=>(
      <div key={index} onClick={()=>{(document.getElementById as any)('my_modal_5').showModal(), setSelectedcar(car)}}>

        <CarCard car = {car}/>
      </div>
     ))}
    </div>
    {/* Open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_5" className="modal modal-bottom md:modal-middle">
 <BookingModal car={selectedcar}/>
</dialog>
    </>
  )
}

export default CarsList