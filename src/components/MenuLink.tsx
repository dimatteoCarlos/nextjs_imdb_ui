import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';

type MenuLinkPropType = {
  route: string;
  title: string;
  Icon: IconType;
};

const MenuLink = ({ route, title, Icon }: MenuLinkPropType) => {
  return (
    <>
      <Link href={route}>
        <p className='menuLink__title uppercase hidden font-bold text-[0.875rem] text-sm  sm:inline'>
          {title}
        </p>
        <Icon className='menuLink__title sm:hidden text-2xl'></Icon>
      </Link>
    </>
  );
};

export default MenuLink;
