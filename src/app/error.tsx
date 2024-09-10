"use client"

import { useEffect } from "react";

type ErrorTypeProp = {
  error: { message: string }; // Define el tipo específico de error
  reset: () => void;
}

function error({ error, reset }: ErrorTypeProp) {

  useEffect(() => {
    console.log("Error:", error);
  }, [error]);


  const handleReset = () => {
    // Recarga completamente la página
    window.location.reload();
  };

  return (
    <div className='text-center mt-10'>
      <h1>Something went wrong. Please try again later.</h1>
      <button 
        className="hover:text-amber-600" 
        onClick={() => handleReset()} 
        aria-label="Try again"
      >
        Try again
      </button>
    </div>
  );
}

export default error;
