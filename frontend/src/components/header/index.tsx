import { NavBar } from '../nav-bar';

export const Header = () => {
  return (
    <header className="h-[100px] w-full flex justify-center items-center sticky top-0">
      <div className="max-w-[1090px] w-full flex items-center justify-between px-[25px] lg:px-3">
        <a
          href="/"
          className="text-3xl transition duration-300 font-pacifico hover:text-admin-primary"
        >
          Bellinda
        </a>
        <NavBar />
      </div>
    </header>
  );
};
