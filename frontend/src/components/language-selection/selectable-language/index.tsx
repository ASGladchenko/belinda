import Cookies from 'js-cookie';
import { usePathname, useRouter } from 'next-intl/client';

import { expiresLang } from '@/constants';

import { ISelectableLanguage } from '../types';

export function SelectableLanguage({
  abb,
  Icon,
  name,
  onClose,
}: ISelectableLanguage) {
  const router = useRouter();
  const pathname = usePathname();

  const classChild =
    'flex items-center gap-3  px-3 py-2 text-sm text-black transition duration-300 dark:text-white  hover:bg-admin-lighten-main dark:hover:bg-admin-darken-main';

  const onClick = () => {
    router.replace(pathname, { locale: abb });
    Cookies.set('NEXT_LOCALE', abb, { expires: expiresLang });
    onClose();
  };

  return (
    <div data-lang={abb} onClick={onClick} className={classChild}>
      {Icon}
      <span className="text-sm capitalize select-none">{name}</span>
    </div>
  );
}
