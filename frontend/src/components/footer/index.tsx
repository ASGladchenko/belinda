import Link from 'next-intl/link';

import { IFooter } from '@/types';

import { translatedFooter } from './config';

export const Footer = ({ slogan, ...props }: IFooter) => {
  const navbar = translatedFooter(props);

  return (
    <footer className="bg-black py-[30px] md:py-[60px] text-white">
      <div className="max-w-[1090px] m-[auto] px-[25px] lg:px-3 flex justify-between items-center flex-wrap">
        <div>
          <Link
            href="/"
            className="text-3xl text-white transition duration-300 font-pacifico hover:text-admin-primary"
          >
            Bellinda
          </Link>

          <p className="mt-[30px] text-[8px] md:text-sm opacity-60">{slogan}</p>
        </div>

        <div className="hidden gap-2 md:flex ">
          {navbar.map((link, idx) => (
            <a
              href={link.path}
              key={`footer-${idx}`}
              className="uppercase text-[12px] lg:text-[15px] leading-4 font-[600] hover:text-admin-primary transition duration-100 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-end">
          <p className="mb-[30px] opacity-70">bellinda@email.some</p>

          <p className="text-[8px] sm:text-sm opacity-60 text-end">
            © «Bellinda» 2023
          </p>
        </div>
      </div>
    </footer>
  );
};
