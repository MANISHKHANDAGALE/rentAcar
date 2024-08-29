import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import {
  SignedIn,
  SignedOut,
  SignInButton,
    UserButton
  } from "@clerk/nextjs";
function NavBar() {
  return (
    <div className='flex items-center
    justify-between p-3 px-5 shadow-sm border-b-[1px]'>
        <Image src='/logo.png'
        alt='logo'
        width={100}
        height={100}
        />
        <div className='hidden md:flex gap-5'>
          <Link href='/'><h2 className='
            hover:bg-blue-500
            px-3 cursor-pointer
            p-2 rounded-full hover:text-white'>Home</h2></Link>
      
            <Link href='/dashboard'><h2 className='hover:bg-blue-500
            px-3 cursor-pointer
            p-2 rounded-full hover:text-white'>History</h2></Link>
            
            <Link href='/Contactus'><h2 className='hover:bg-blue-500
            px-3 cursor-pointer
            p-2 rounded-full hover:text-white'>Contact Us</h2></Link>
     
           
        </div>
          
        <header>
            <SignedOut>
            <SignInButton>
            <button className='p-2  bg-red-500 text-white
            px-4 rounded-full 
            hover:scale-105 transition-all'>Sign in</button>
            </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>

    </div>
  )
}

export default NavBar