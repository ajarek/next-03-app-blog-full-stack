"use client"

import { useState } from "react";




const DarkModeToggle = () => {
  const [dark,setMode]=useState(false)
  return (
    <div className='flex items-center border rounded-xl relative' onClick={()=>setMode(!dark)}>
      <div className=''>🌙</div>
      <div className=''>🔆</div>
      <div
        className='bg-teal-500 w-5 h-5 rounded-full absolute cursor-pointer'
        style={dark ? { left: "2px"} : { right: "2px"}}
      />
    </div>
  );
};

export default DarkModeToggle;