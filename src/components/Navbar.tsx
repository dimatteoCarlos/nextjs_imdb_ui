import React from 'react';
import NavbarLink from './NavbarLink';

function Navbar() {
  return (
    <div className='flex   dark:bg-gray-600  bg-amber-100 p-3.5 justify-center gap-6 '>
      <NavbarLink title={'popular'} param={'fetchPopular'}></NavbarLink>
      <NavbarLink title={'news'} param={'fetchNews'}></NavbarLink>
    </div>
  );
}

export default Navbar;
