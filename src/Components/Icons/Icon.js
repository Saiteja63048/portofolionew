import React from 'react'
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";






export const Icon = () => {
    return (
      <div className='bg-slate-950'>

<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-10 lg:py-20  rounded">
       
       <h1 className="text-4xl font-bold text-pink-600 mb-10" >Teck Stack</h1>
       
       
       <div className="grid grid-cols-2 row-gap-5 md:grid-cols-5 mt-12">
         <div className="text-center">
           <AiFillHtml5 className="text-4xl font-bold text-deep-purple-accent-400 text-orange-600" ></AiFillHtml5>
         </div>
         <div className="text-center">
         <SiCss3 className="text-3xl font-bold text-deep-purple-accent-400 text-blue-800" ></SiCss3>
         </div>
         <div className="text-center">
         <IoLogoJavascript className="text-4xl font-bold text-white" ></IoLogoJavascript>
         </div>
         <div className="text-center">
         <GrReactjs className="text-4xl font-bold text-deep-purple-accent-400 text-sky-500" ></GrReactjs>
         </div>
         <div className="text-center">
         <SiTailwindcss className="text-4xl font-bold text-white" ></SiTailwindcss>
         </div>

       </div>
     </div>
     {/* <hr className='mx-20 '></hr> */}
      </div>

    );
  };