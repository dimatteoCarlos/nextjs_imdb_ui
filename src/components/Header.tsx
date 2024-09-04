import { FaHome } from 'react-icons/fa';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import MenuLeftLink from './MenuLeftLink';
import { MdDarkMode } from 'react-icons/md';
import Link from 'next/link';

function Header() {
  return (
    <header className='flex justify-between  mx-auto h-[3rem] w-full p-3 max-w-6xl items-center'>
      <div className='menuLinksLeft flex gap-8 items-center '>
        <MenuLeftLink route='/' title='home' Icon={FaHome}></MenuLeftLink>
        <MenuLeftLink
          route='/about'
          title='about'
          Icon={BsFillInfoCircleFill}
        />
      </div>



      <Link href='/' className='flex items-center gap-1 '>
        <span className='text-2xl font-bold bg-amber-500 text-white rounded-lg px-2 py-1'>
          IMDb
        </span>

        <span className='text-xl hidden sm:inline'>Clone</span>
      </Link>
    </header>
  );
}

export default Header;
