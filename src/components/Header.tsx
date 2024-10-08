import { FaHome } from 'react-icons/fa';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import MenuLink from './MenuLink';
import DarkModeSwitch from './DarkModeSwitch';

function Header() {
  return (
    <header className='flex justify-between  mx-auto h-[3rem] w-full p-3 max-w-6xl items-center'>
      <div className='menuLinksLeft flex gap-4 items-center '>
        <MenuLink route='/' title='home' Icon={FaHome}></MenuLink>
        <MenuLink route='/about' title='about' Icon={BsFillInfoCircleFill} />
      </div>
      <div className='menuLinksRight flex gap-4 items-center'>
        <DarkModeSwitch />
        <Link href='/' className='flex items-center gap-1 '>
          <span className='text-2xl font-bold bg-amber-500 text-white rounded-lg px-2 py-1'>
            IMDb
          </span>

          <span className='text-xl hidden sm:inline'>Clone</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
