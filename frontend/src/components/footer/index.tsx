import { IFooter } from '@/types';

import { translatedFooter } from './config';

export const Footer = ({ slogan, ...props }: IFooter) => {
  const navbar = translatedFooter(props);

  return (
    <footer className="bg-black py-[30px] md:py-[60px] text-white">
      <div className="max-w-[1090px] m-[auto] px-[25px] lg:px-3 flex justify-between items-center flex-wrap">
        <a
          href="/"
          className="text-3xl text-white transition duration-300 font-pacifico hover:text-admin-primary"
        >
          Bellinda
        </a>

        <div className="hidden gap-2 md:flex ">
          {navbar.map((link, idx) => (
            <a
              href={link.path}
              key={`footer-${idx}`}
              className="uppercase text-[15px] leading-4 font-[600] hover:text-admin-primary transition duration-100 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>

        <p className="opacity-70">bellinda@email.some</p>

        <div className="flex items-center justify-between pt-[30px] w-full">
          <p className="text-[8px] sm:text-sm opacity-60">{slogan}</p>
          <p className="text-[8px] sm:text-sm opacity-60">© «Bellinda» 2023</p>
        </div>
      </div>
    </footer>
  );
};
