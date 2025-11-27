import React from 'react'
import { useRef } from "react";


const Domref = () => {
     let myRef = useRef(null);

  const handlescroll = () => {
    console.log(myRef.current);

    myRef.current.textContent = "thank you";
  };
  return (
    <div>
      <div ref={myRef} className="text-3xl m-5 font-bold">
        welcome
      </div>
      <button
        className="m-5 text-6xl border-2 rounded-2xl bg-sky-400 font-bold p-2"
        onClick={handlescroll}
      >
        click
      </button>
    </div>
    
  )
}

export default Domref