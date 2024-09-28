import { log } from 'console';
import React, { useEffect, useState } from 'react'

function CarsFliterOptions({carsList,setCarbrands,ordercarlist}:any) {
  const[brand,SetBrand] = useState<any>();
const carBrand = new Set();
useEffect(()=>{
if(carsList){
  filter();
}
},[carsList])
  const filter= () =>{
    carsList.forEach((element:any) => {
      carBrand.add(element.carBrand)
    });
    console.log(carBrand);
    
SetBrand(Array.from(carBrand))
  }
  return (
    <div className='mt-10 flex justify-between '>
        <div>
            <h2 className='text-[30px] font-bold'>Car Catalog</h2>
            <h2>Explore Our Cars</h2>
        </div>
        <div className='flex gap-5'>
            <select className=" font-bold select select-bordered w-full max-w-xs" onChange={(e)=>ordercarlist(e.target.value)}>
  <option  selected>Price</option>
  <option value={-1}>Min - Max</option>
  <option value={1}>Max - Min</option>
</select>
            <select className=" font-bold select select-bordered w-full md:block max-w-xs hidden" onChange={(e)=>{setCarbrands(e.target.value);
            }}>
  <option  selected>Company</option>
  {brand&&brand.map((brand:string,index:number)=>(

  <option key={index}>{brand}</option>
  ))}
</ select>

        </div>
    </div>
  )
}

export default CarsFliterOptions