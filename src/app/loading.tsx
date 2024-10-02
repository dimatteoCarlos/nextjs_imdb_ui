'use client';

import Image from 'next/image';

function loading() {
  return (
    <div className='flex justify-center'>
      <Image src='/Gear.svg' alt='Loading...' width={150} height={150} />
    </div>
  );
}

export default loading;
