import Link from 'next/link';

import { Delete, Edit } from '@/assets/icons';

import { getStyles } from './styles';
import { IProductLink } from './types';
import { Button } from '@/components/button';

export const ProductLink = ({ name, href }: IProductLink) => {
  const { icon, link } = getStyles();
  return (
    <Link href={href} className={link}>
      <p>{name}</p>

      <div className="flex gap-3">
        <Button
          type="button"
          variant="ghost-primary"
          className="w-10 h-10 px-0 py-0 rounded-full"
          icon={<Edit width={24} height={22} />}
        />

        <Button
          type="button"
          variant="ghost-primary"
          className="w-10 h-10 px-0 py-0 rounded-full"
          icon={<Delete width={24} height={24} />}
        />
      </div>
    </Link>
  );
};
