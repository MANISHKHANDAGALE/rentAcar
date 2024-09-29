"use client"
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Hero from "./Components/Home/Hero";
import Searchinput from "./Components/Home/Searchinput";
import CarsFliterOptions from "./Components/Home/CarsFliterOptions";
import { getCarsList } from "@/Services/Index";
import { useEffect } from "react";
import { useState } from "react";
import CarsList from "./Components/Home/CarsList";
import Toast from "./Components/Home/Toast";
import {BookCreatedFlagContext} from "./Context/BookCreatedFlagContext"


export default function Home() {
  const [carsList,setCarsList]=useState<any>([])
  const [carsOrgList,setCarsOrgList]=useState<any>([])
  const [showToastMsg,setShowToastMsg]=useState<boolean>(false);
  useEffect(()=>{
if(showToastMsg){
  setTimeout(()=>{
setShowToastMsg(false)
  },3000)
}
  },[showToastMsg])
  
 useEffect(()=>{
   getCarList_();
 },[])
       
  const getCarList_ = async() => {
    const result:any = await getCarsList()
    setCarsList(result?.carLists)
    setCarsOrgList(result?.carLists)
    console.log(result)
  }
  const filtercarlist = (brand: string) => {
    if (brand == "Company") {
      console.log("Selected brand:", brand);

      // Show all cars if no brand is selected
      setCarsList(carsOrgList);
    } else {
      const filterlist = carsOrgList.filter((item: any) => item.carBrand === brand);
      console.log("Selected brand:", brand);

      setCarsList(filterlist);
    }
  };
  
  const orderCarList=(order:any)=>{
    const sortedData = [...carsOrgList].sort((a, b) =>
    order==-1? a.price - b.price:b.price - a.price);
    setCarsList(sortedData);
  }
  
  return (
   <div className="p-5 sm:px-10 md:px-20">

<BookCreatedFlagContext.Provider value={{showToastMsg,setShowToastMsg}}>

    <Hero/>
    <Searchinput/>
    <CarsFliterOptions ordercarlist ={(e:any)=> orderCarList(e)}
     carsList={carsOrgList} setCarbrands = { (e:any) => filtercarlist(e)}/>
    <CarsList carsList={carsList} />
    {showToastMsg?<Toast/>:null}
</BookCreatedFlagContext.Provider>

   </div>
  );
}
