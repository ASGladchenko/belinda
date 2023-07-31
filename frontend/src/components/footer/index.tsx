import { useLocaleText } from '@/locale';
import { translatedFooterNavbar } from '../content-data';

export const Footer = () => {
  const text = useLocaleText('footerClient');
  const navbar = translatedFooterNavbar();

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
          {navbar.map((link) => (
            <a
              key={`footer-${link.name}`}
              href={link.path}
              className="uppercase text-[15px] leading-4 font-[600] hover:text-admin-primary transition duration-100 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>

        <p className="opacity-70">bellinda@email.some</p>

        <div className="flex items-center justify-between pt-[30px] w-full">
          <p className="text-[8px] sm:text-sm opacity-60">{text.company}</p>
          <p className="text-[8px] sm:text-sm opacity-60">{text.slogan}</p>
        </div>
      </div>
    </footer>
  );
};
