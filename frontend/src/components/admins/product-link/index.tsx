import Link from 'next/link';

import { Button } from '@/components/button';
import { Delete, Edit } from '@/assets/icons';

import { getStyles } from './styles';
import { IProductLink } from './types';

export const ProductLink = ({ name, href, modify = true }: IProductLink) => {
  const { link, remove, edit } = getStyles();

  return (
    <Link href={href} className={link}>
      <p>{name}</p>

      <div className="flex gap-3">
        {modify && (
          <Button
            type="button"
            className={edit}
            variant="ghost-primary"
            icon={<Edit width={24} height={22} />}
            onClick={(event) => {
              event.preventDefault();
            }}
          />
        )}

        <Button
          type="button"
          className={remove}
          variant="ghost-primary"
          icon={<Delete width={24} height={24} />}
          onClick={(event) => {
            event.preventDefault();
          }}
        />
      </div>
    </Link>
  );
};
