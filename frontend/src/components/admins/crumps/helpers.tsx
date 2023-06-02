'use client';
import { usePathname } from 'next/navigation';

export const BreadCrumps = () => {
  const path = usePathname();

  const crumps = path.slice(1).split('/');

  return crumps.map((el, index) => {
    const to = path.indexOf(el) + el.length;

    if (!index) return { name: 'home', path: path.slice(0, to) };

    return {
      name: el,
      path: path.slice(0, to),
    };
  });
};
