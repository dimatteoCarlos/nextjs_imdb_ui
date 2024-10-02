'use client';

import Image from "next/image";

function loading() {
  return (
    <div className='flex justify-center'>
      <Image src='/Gear.svg' alt='Loading...' />
    </div>
  );
}

export default loading;
