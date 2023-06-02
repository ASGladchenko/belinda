import Link from 'next/link';

const Crumps = ({ crumps }: { crumps: { name: string; path: string }[] }) => {
  return (
    <div className="flex gap-2 text-sm font-medium capitalize ">
      {crumps.map((el, index) => {
        if (!index || index > 3) return;

        if (index === crumps.length - 1) {
          return (
            <span
              key={el.name}
              className="capitalize select-none text-admin-lighten-crumpsActive dark:text-admin-darken-crumpsActive"
            >
              {el.name}
            </span>
          );
        }

        return (
          <>
            <Link
              key={el.name}
              href={el.path}
              className="capitalize text-admin-lighten-crumps hover:text-admin-lighten-crumpsHover active:text-admin-lighten-crumpsActive dark:text-admin-darken-crumps dark:hover:text-admin-darken-crumpsHover dark:active:text-admin-darken-crumpsActive "
            >
              {el.name}
            </Link>

            <span className="select-none text-admin-lighten-crumps dark:text-admin-darken-crumps">{`>`}</span>
          </>
        );
      })}
    </div>
  );
};

export default Crumps;
