import Link from 'next/link';

interface ICrumps {
  crumps: { name: string; path: string }[];
  max?: number;
}

const Crumps = ({ crumps, max = 3 }: ICrumps) => {
  return (
    <div className="flex gap-2 text-sm font-medium capitalize ">
      {crumps.map(({ name, path }, index) => {
        if (name.split('_').length > 1) name = name.split('_').join(' ');

        if (index === 1) path = '/admin';

        if (!index || index > max) return;

        if (index === crumps.length - 1) {
          return (
            <span
              key={name}
              className="capitalize select-none text-admin-lighten-crumpsActive dark:text-admin-darken-crumpsActive"
            >
              {name}
            </span>
          );
        }

        return (
          <>
            <Link
              key={name}
              href={path}
              className="capitalize text-admin-lighten-crumps hover:text-admin-lighten-crumpsHover active:text-admin-lighten-crumpsActive dark:text-admin-darken-crumps dark:hover:text-admin-darken-crumpsHover dark:active:text-admin-darken-crumpsActive "
            >
              {name}
            </Link>

            <span className="select-none text-admin-lighten-crumps dark:text-admin-darken-crumps">{`>`}</span>
          </>
        );
      })}
    </div>
  );
};

export { Crumps };
