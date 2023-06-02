import Link from 'next/link';

const Crumps = ({ crumps }: { crumps: { name: string; path: string }[] }) => {
  return (
    <div className="flex gap-2 text-sm font-medium capitalize text-admin-lighten-border darken:text-text ">
      {crumps.map((el, index) => {
        if (!index) return;
        if (index === crumps.length - 1) {
          return (
            <>
              <span className="select-none">\</span>
              <span key={el.name} className="capitalize select-none">
                {el.name}
              </span>
            </>
          );
        }

        if (index) {
          return (
            <>
              <span>\</span>
              <Link key={el.name} href={el.path} className="capitalize">
                home
              </Link>
            </>
          );
        }

        return (
          <Link key={el.name} href={el.path} className="capitalize">
            home
          </Link>
        );
      })}
    </div>
  );
};

export default Crumps;
