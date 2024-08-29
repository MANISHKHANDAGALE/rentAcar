import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Hero from "./Components/Home/Hero";
import Searchinput from "./Components/Home/Searchinput";

export default function Home() {
  return (
   <div className="p-5 sm:px-10 md:px-20">
    <Hero/>
    <Searchinput/>
   </div>
  );
}
