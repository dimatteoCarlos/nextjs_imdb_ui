'use client';

import { useRouter } from 'next/navigation';
import { FC } from 'react';

const GoBackButton: FC = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className='mb-4 p-2 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-600 transition-colors dark:bg-amber-500 dark:text-black-600'
    >
      &larr; Go Back
    </button>
  );
};

export default GoBackButton;
