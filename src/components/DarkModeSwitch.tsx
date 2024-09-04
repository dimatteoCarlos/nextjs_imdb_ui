'use client'
import { useTheme } from '@/app/context/ThemeContext';

import { MdLightMode, MdDarkMode } from 'react-icons/md';


const DarkModeSwitch = () => {
  const {theme,
    switchTheme }=useTheme()
  return (
    <div>
{
        (theme === 'dark' ? (
          <MdLightMode
            onClick={() => switchTheme()}
            className='text-xl cursor-pointer hover:text-amber-500'
          />
        ) : (
          <MdDarkMode
            onClick={() => switchTheme()}
            className='text-xl cursor-pointer hover:text-amber-500'
          />
        ))}
    </div>
  )
}

export default DarkModeSwitch
