'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

type NavbarLinkTypeProp = { param: string; title: string };
function NavbarLink({ param, title }: NavbarLinkTypeProp) {
  const params = useSearchParams();
  const genre = params.get('genre');
  const route = `/?genre=${param}`;

  // The text-decoration-thickness property in CSS is used to control the thickness of text decorations such as underline, overline, and line-through. This property provides a way to customize the appearance of these decorations, offering finer control over their styling.

  return (
    <div>
      <Link
        href={route}
        className={`capitalize font-semibold hover:text-amber-600
        ${
          genre === param
            ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
            : ''
        }
        `}
      >
        {title}
      </Link>
    </div>
  );
}

export default NavbarLink;
