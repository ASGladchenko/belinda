import { useState, useEffect } from 'react';
import useSWR from 'swr';
import Link from 'next-intl/link';

import { productRoot } from '@/http';
import { IHeaderClient } from '@/types';
import { GET_CATEGORY } from '@/constants';

import { NavBar } from '../nav-bar';
import { getStyles } from './styles';

export const Header = (props: IHeaderClient) => {
  const { data, isLoading } = useSWR(GET_CATEGORY, productRoot.getCategory);

  const categories = data
    ? data.map(({ id, name }: { id: string; name: string }) => ({
        id: id,
        name: name,
      }))
    : [];

  const [isScrollHeader, setIsScrollHeader] = useState(false);
  const { header, container, logo } = getStyles(isScrollHeader);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80 && !isScrollHeader) {
        setIsScrollHeader(true);
      }

      if (window.scrollY < 90 && isScrollHeader) {
        setIsScrollHeader(false);
      }
    });
  }, [isScrollHeader]);

  return (
    <header className={header}>
      <div className={container}>
        <Link href="/" className={logo}>
          Bellinda
        </Link>

        <NavBar {...props} isLoading={isLoading} categories={categories} />
      </div>
    </header>
  );
};
