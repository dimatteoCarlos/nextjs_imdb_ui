import React, { Suspense } from 'react';

const Loader = () => <div>Loading...</div>;

const NotFound = () => {
  return (
    <Suspense fallback={<Loader />}>
      <section className='max-w-6xl p-3 mx-auto space-y-4 text-center'>
        <h1 className='text-4xl font-bold text-red-600'>
          404 - Page Not Found
        </h1>
        <p className='text-lg'>
          Oops! The page you are looking for does not exist.
        </p>
        <p>You may have mistyped the address or the page may have moved.</p>
        <a href='/' className='text-blue-600 hover:underline'>
          Go back to the homepage
        </a>
      </section>
    </Suspense>
  );
};

export default NotFound;
