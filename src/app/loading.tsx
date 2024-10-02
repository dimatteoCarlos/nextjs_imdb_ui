'use client';

import Image from 'next/image';

function loading() {
  return (
    <div className='icon__container flex justify-center overflow-hidden'>
      <Image
        src='/Gear.svg'
        alt='Loading...'
        width={150}
        height={150}
        className='cover w-full'
      />
    </div>
  );
}

export default loading;
